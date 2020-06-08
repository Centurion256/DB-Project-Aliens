from sqlsetup import db

# from sqlalchemy import Column, String, Integer, Date, Table, ForeignKey
# from sqlalchemy.orm import relation
from datetime import date

class Alien(db.Model):
    __tablename__ = "alien"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    status = db.Column(db.Integer, nullable=False)

    # def __init__(self, name, status):

    #     self.name = name
    #     self.status = status

    def __repr__(self):
        return f"<Alien (id={self.id}, name={self.name}, status={self.status})"

    
class Human(db.Model):
    __tablename__ = "human"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    status = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Human (id={self.id}, name={self.name}, status={self.status})"


class Spaceship(db.Model):
    __tablename__ = "spaceship"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"<Spaceship (id={self.id}, title={self.title})"


class Abduction(db.Model):
    __tablename__ = "abduction"

    id = db.Column(db.Integer, primary_key=True)
    humanid = db.Column(db.Integer, db.ForeignKey("human.id"), nullable=False)
    alienid = db.Column(db.Integer, db.ForeignKey("alien.id"), nullable=False)
    shipid = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today) 
    #relationships 
    human = db.relation("Human", backref="abduction")
    alien = db.relation("Alien", backref="abduction")
    ship = db.relation("Spaceship", backref="abduction")
