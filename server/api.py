from flask import Flask, jsonify, request
from flask_cors import CORS
from os import environ
from sqlsetup import db
from tables import Alien, Human, Spaceship, Abduction, Excursion, Experiment, Murder, Transportation, Redemption
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DBURI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db.init_app(app)

## Views are defined here (They are reflections and therefore need app context)

with app.app_context():
## START VIEWS
    class ConvictionLog(db.Model):

        __table__ = db.Table("conviction_log", db.metadata,
                                db.Column("humanid", db.Integer, db.ForeignKey("human.id"), nullable=False),
                                db.Column("shipid", db.Integer, db.ForeignKey("spaceship.id"), nullable=False),
                                db.Column("date", db.Date, nullable=False),
                                db.Column("source", db.Integer, nullable=False), 
                                db.PrimaryKeyConstraint('humanid', 'shipid', 'date', 'source'),
                                autoload=True, autoload_with=db.engine)

## END VIEWS


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
                        .filter(Alien.name == data.get("alien_name")) \
                        .group_by(Alien.name, Human.id) \
                        .having(db.func.count() >= data.get("count")) \
                        .all()

    print(abducted_humans)
    return jsonify(abducted_humans)

@app.route('/api/display/q2/', methods=['GET'])
def aliens_q2():

    data = request.args
    print(data)
    visited_ships = db.session.query(Spaceship.title, ConvictionLog.date) \
                            .join(Spaceship, ConvictionLog.shipid == Spaceship.id) \
                            .filter(ConvictionLog.date > data.get("start_date"), ConvictionLog.date < data.get("end_date")) \
                            .join(Human, ConvictionLog.humanid == Human.id) \
                            .filter(Human.name == data.get("human_name")) \
                            .all()

    print(visited_ships)
    return jsonify(visited_ships)

@app.route('/api/display/q3/', methods=['GET'])
def aliens_q3():

    data = request.args
    print(data)
    abducers = db.session.query(Alien.name, db.func.count(Human.id)) \
                        .join(Abduction, Alien.id == Abduction.alienid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .join(Human, Abduction.humanid == Human.id) \
                        .filter(Human.name == data.get("human_name")) \
                        .group_by(Alien.name) \
                        .having(db.func.count(Human.id) >= data.get("count")) \
                        .all()

    print(abducers)
    return jsonify(abducers)



@app.route('/api/display/q4/', methods=['GET'])
def aliens_q4():

    data = request.args
    killed_aliens = db.session.query(Alien.name) \
                        .join(Murder, Alien.id == Murder.alienid) \
                        .filter(Murder.date > data.get("start_date"), Murder.date < data.get("end_date")) \
                        .join(Human, Murder.humanid == Human.id) \
                        .filter(Human.name == data.get("human_name")) \
                        .all()

    print(killed_aliens)
    return jsonify(killed_aliens)

@app.route('/api/display/q5/', methods=['GET'])
def aliens_q5():

    data = request.args
    killed_aliens = db.session.query(Alien.name) \
                        .join(Murder, Alien.id == Murder.alienid) \
                        .join(Human, Murder.humanid == Human.id) \
                        .filter(Human.name == data.get("human_name")) \
                        .all()

    print(killed_aliens)
    return jsonify(killed_aliens)

@app.route('/api/display/q6', methods=['GET'])
def aliens_q6():

    data = request.args
    alien_abducers = db.session.query(Alien.id, Alien.name.label("alien_name")) \
                        .join(Abduction, Alien.id == Abduction.alienid) \
                        .filter(Abduction.date > data.get("start_date"), Abduction.date < data.get("end_date")) \
                        .group_by(Alien.name) \
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


@app.route('/api/display/q8', methods=['GET'])
def aliens_q8():

    data = request.args
    excursions = db.session.query(Excursion.id, Excursion.date) \
                        .filter(Excursion.date > data.get("start_date"), Excursion.date < data.get("end_date")) \
                        .join(Human, Excursion.humans) \
                        .filter(Human.name == data.get("human_name")) \
                        .join(Alien, Excursion.alienid == Alien.id) \
                        .filter(Alien.name == data.get("alien_name"))
    experiments = db.session.query(Experiment.id, Experiment.date) \
                        .filter(Experiment.date > data.get("start_date"), Experiment.date < data.get("end_date")) \
                        .join(Alien, Experiment.aliens) \
                        .filter(Alien.name == data.get("alien_name")) \
                        .join(Human, Experiment.humanid == Human.id) \
                        .filter(Human.name == data.get("human_name"))

    result = excursions.union(experiments).all()
    print(result)
    return jsonify(result)


@app.route('/api/display/q9', methods=['GET'])
def aliens_q9():

    data = request.args
    excursions = db.session.query(Excursion.id, db.func.count(Human.id)) \
                        .filter(Excursion.date > data.get("start_date"), Excursion.date < data.get("end_date")) \
                        .join(Alien, Excursion.alienid == Alien.id) \
                        .filter(Alien.name == data.get("alien_name")) \
                        .join(Human, Excursion.humans) \
                        .group_by(Excursion.id) \
                        .having(db.func.count(Human.id) >= data.get("count")) \
                        .all()
    
    print(excursions)
    return jsonify(excursions)


@app.route('/api/display/q10', methods=['GET'])
def aliens_q10():

    data = request.args
    experiments = db.session.query(Experiment.id, db.func.count(Alien.id)) \
                        .filter(Experiment.date > data.get("start_date"), Experiment.date < data.get("end_date")) \
                        .join(Human, Experiment.humanid == Human.id) \
                        .filter(Human.name == data.get("human_name")) \
                        .join(Alien, Experiment.aliens) \
                        .group_by(Experiment.id) \
                        .having(db.func.count(Alien.id) >= data.get("count")) \
                        .all()
    
    print(experiments)
    return jsonify(experiments)

@app.route('/api/display/q11', methods=['GET'])
def aliens_q11():

    abductions = db.session.query(db.extract('month', Abduction.date), db.func.count(Abduction.id)) \
                        .group_by(db.extract('month', Abduction.date)) \
                        .all()
    
    print(abductions)
    return jsonify(abductions)

#TODO
@app.route('/api/display/q12', methods=['GET'])
def aliens_q12():

    data = request.args
    spaceships = db.session.query(Spaceship.title, db.func.count(Experiment.id)) \
                        .join(Experiment, Spaceship.id == Experiment.shipid) \
                        .join(Alien, Experiment.aliens) \
                        .filter(Alien.name == data.get("alien_name")) \
                        .group_by(Spaceship.title) \
                        .order_by(db.func.count(Experiment.id)) \
                        .all()
    
    print(spaceships)
    return jsonify(spaceships)
