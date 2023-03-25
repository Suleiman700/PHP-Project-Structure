
# Database Description

```mysql
CREATE TABLE users (
  id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age TINYINT(3) UNSIGNED,
  country VARCHAR(30),
  email VARCHAR(50),
  profile_pic VARCHAR(150)
);

CREATE INDEX idx_age ON users (age);
CREATE INDEX idx_country ON users (country);
```

database and table creation can be used by opening file `0_database.sql`

---

### `id` column

The id column is defined as `SMALLINT UNSIGNED`, which is a data type that can store integer values between 0 and 65535.
This data type was chosen partly due to the fact that this is a home assignment with a relatively small number of rows, and partly because using a smaller data type can have performance benefits.

The `UNSIGNED` keyword is used to specify that the id column will only store non-negative integer values. By using SMALLINT UNSIGNED, the maximum possible value for the column is doubled, allowing for a larger range of positive values to be stored in the column.

---

### `name` column

name is a required field of type VARCHAR(50) that can store up to 50 characters.

---

### `age` column

The reason for using `TINYINT` instead of `INT` is that `TINYINT` is a smaller data type that can store integer values between -128 and 127 when signed, or 0 to 255 when unsigned. In this case, since the age column is unlikely to ever store values greater than 255, using `TINYINT` saves storage space and can improve query performance.

---

### `country` column

The country column is defined as `VARCHAR(30)`. This data type is used to store variable-length character strings with a maximum length of 30 characters.

---

### `email` column

The email column is defined as `VARCHAR(50)`. This data type is used to store variable-length character strings with a maximum length of 50 characters.

---

### `profile_pic` column

The profile_pic column is defined as `VARCHAR(150)`. This data type is used to store variable-length character strings with a maximum length of 150 characters.
