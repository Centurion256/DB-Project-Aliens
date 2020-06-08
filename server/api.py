from flask import Flask, jsonify, request
from flask_cors import CORS
from os import environ
from sqlsetup import db
from tables import Alien, Human, Spaceship, Abduction
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DBURI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db.init_app(app)

@app.route('/', methods=['GET'])
def get():

    aliens = db.session.query(Alien).all()
    print(aliens[0])
    return jsonify([{"id": alien.id, "name": alien.name, "status": alien.status} for alien in aliens])

@app.route('/abduction', methods=['GET'])
def query_abductions():
    
    abductions = db.session.query(Abduction)
    abducted_humans = db.session.query(Human.name, Alien.name.label("alien_name"), Abduction.date) \
                         .join(Abduction, Human.id == Abduction.humanid) \
                         .join(Alien, Abduction.alienid == Alien.id) \
                         .all()

    return jsonify([f"{human.name} has been abducted by {human.alien_name} on {human.date}" for human in abducted_humans])


@app.route('/api/display/q1/', methods=['GET'])
def aliens_q1():

    data = request.args
    abducted_humans = db.session.query(Human.name) \
                        .join(Abduction, Human.id == Abduction.humanid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .join(Alien, Abduction.alienid == Alien.id) \
                        .filter(Alien.id == data.get("alienid")) \
                        .group_by(Alien.name, Human.id) \
                        .having(db.func.count() >= data.get("count")) \
                        .all()

    print(abducted_humans)
    return jsonify(abducted_humans)


@app.route('/api/display/q6', methods=['GET'])
def aliens_q6():

    data = request.args
    alien_abducers = db.session.query(Alien.id, Alien.name.label("alien_name")) \
                        .join(Abduction, Alien.id == Abduction.alienid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .group_by(Alien.id, Alien.name) \
                        .having(db.func.count(Abduction.humanid) >= data.get("count")) \
                        .all() #note that func.count() deduplicates values by default, no need to worry about UNIQUE humanid.

    print(alien_abducers)
    return jsonify(alien_abducers)

@app.route('/api/display/q7', methods=['GET'])
def aliens_q7():

    data = request.args
    abducted = db.session.query(Human.id, Human.name.label("human_name")) \
                        .join(Abduction, Human.id == Abduction.humanid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .group_by(Human.id) \
                        .having(db.func.count(Abduction.alienid) >= data.get("count")) \
                        .all()

    print(abducted)
    return jsonify(abducted)

#TODO
@app.route('/api/display/q8', methods=['GET'])
def aliens_q8():

    
    data = request.args
    abducted = db.session.query(Human.id, Human.name.label("human_name")) \
                        .join(Abduction, Human.id == Abduction.humanid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .group_by(Human.id) \
                        .having(db.func.count(Abduction.alienid) >= data.get("count")) \
                        .all()

    # excursions = db.session.

    print(abducted)
    return jsonify(abducted)