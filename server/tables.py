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

Excursion_human = db.Table('excursion_human', db.Model.metadata,
                            db.Column('excursionid', db.Integer, db.ForeignKey("excursion.id")),
                            db.Column('humanid', db.Integer, db.ForeignKey("human.id")),
                            db.PrimaryKeyConstraint('excursionid', 'humanid')
                            )

class Excursion(db.Model):
    __tablename__ = "excursion"

    id = db.Column(db.Integer, primary_key=True)
    alienid = db.Column(db.Integer, db.ForeignKey("alien.id"), nullable=False)
    shipid = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today)
    #relationships
    humans = db.relation("Human", secondary=Excursion_human, backref="excursions")

Experiment_alien = db.Table('experiment_alien', db.Model.metadata,
                            db.Column('experimentid', db.Integer, db.ForeignKey("experiment.id")),
                            db.Column('alienid', db.Integer, db.ForeignKey("alien.id")),
                            db.PrimaryKeyConstraint('experimentid', 'alienid')
                            )

class Experiment(db.Model):
    __tablename__ = "experiment"

    id = db.Column(db.Integer, primary_key=True)
    humanid = db.Column(db.Integer, db.ForeignKey("human.id"), nullable=False)
    shipid = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today)
    #relationships
    aliens = db.relation("Alien", secondary=Experiment_alien, backref="experiments")


class Redemption(db.Model):
    __tablename__ = "redemption"

    id = db.Column(db.Integer, primary_key=True)
    humanid = db.Column(db.Integer, db.ForeignKey("human.id"), nullable=False)
    shipid = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today)

    human = db.relation("Human", backref="redemption")
    ship = db.relation("Spaceship", backref="redemption")


class Transportation(db.Model):
    __tablename__ = "transportation"

    id = db.Column(db.Integer, primary_key=True)
    humanid = db.Column(db.Integer, db.ForeignKey("human.id"), nullable=False)
    alienid = db.Column(db.Integer, db.ForeignKey("alien.id"), nullable=False)
    fromShipId = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    toShipId = db.Column(db.Integer, db.ForeignKey("spaceship.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today) 

    human = db.relation("Human", backref="transportation")
    alien = db.relation("Alien", backref="transportation")
    fromShip = db.relation("Spaceship", foreign_keys=[fromShipId]) #TODO: verify backrefs
    toShip = db.relation("Spaceship", foreign_keys=[toShipId])


class Murder(db.Model):
    __tablename__ = "murder"

    id = db.Column(db.Integer, primary_key=True)
    humanid = db.Column(db.Integer, db.ForeignKey("human.id"), nullable=False)
    alienid = db.Column(db.Integer, db.ForeignKey("alien.id"), nullable=False)
    date = db.Column(db.Date, nullable=False, default=date.today) 

    human = db.relation("Human", backref="murder")
    alien = db.relation("Alien", backref="murder")