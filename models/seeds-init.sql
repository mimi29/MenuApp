DROP DATABASE IF EXISTS menuapp_db;
CREATE DATABASE menuapp_db;

DROP DATABASE IF EXISTS test_menuapp_db;
CREATE DATABASE test_menuapp_db

use menuapp_db;
INSERT INTO categories(name)
    VALUES("Appertizer");
INSERT INTO categories(name)
    VALUES("Poutry");
INSERT INTO categories(name)
    VALUES("Seafood");
INSERT INTO categories(name)
    VALUES("Soup");
INSERT INTO categories(name)
    VALUES("Sandwich");
INSERT INTO categories(name)
    VALUES("Dessert");