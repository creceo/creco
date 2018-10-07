all:

show:
	mongo 127.0.0.1/myappdatabase --eval "db.getMongo().getDBNames()"
colls:
	mongo 127.0.0.1/myappdatabase --eval "db.getCollectionNames()"
