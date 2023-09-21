
#  Pour creer une table 
CREATE TABLE test(
	id INT(11) NOT NULL AUTO_INCREMENT,
    a INT(11) NOT NULL,
    b INT(11) UNSIGNED ZEROFILL NOT NULL,
    c INT(11) DEFAULT NULL,
    d INT(5) UNSIGNED ZEROFILL NOT NULL,
    e INT(15) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

    7    La liste de tous les utilisateurs vivant à une adresse sans numéro ;
        ```sql
        SELECT users.first_name, users.last_name
        FROM users,addresses
        WHERE users.id = addresses.user_id
        AND addresses.number IS NULL;
        ```

