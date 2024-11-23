-- Create and use the TitleTownCatering Database
CREATE DATABASE IF NOT EXISTS TitleTownCatering;
use TitleTownCatering;

CREATE TABLE ADMIN
(
  AdminId INT NOT NULL,
  AdminPassword VARCHAR(24) NOT NULL,
  AdminEmail VARCHAR(24) NOT NULL,
  PRIMARY KEY (AdminId)
);

CREATE TABLE CUSTOMER
(
  CustId INT NOT NULL,
  CustFName VARCHAR(24) NOT NULL,
  CustLName VARCHAR(24) NOT NULL,
  CustEmail VARCHAR(24) NOT NULL,
  PRIMARY KEY (CustId)
);

CREATE TABLE PAYMENT
(
  PaymentId INT NOT NULL,
  OrderId INT NOT NULL,
  CustId INT NOT NULL,
  PaymentDate VARCHAR(24) NOT NULL,
  PaymentAmount FLOAT NOT NULL,
  PaymentMethod VARCHAR(24) NOT NULL,
  PaymentStatus BIT NOT NULL,
  PRIMARY KEY (PaymentId)
);

CREATE TABLE `ORDER`
(
  OrderId INT NOT NULL,
  OrderDate VARCHAR(12) NOT NULL,
  OrderTime VARCHAR(12) NOT NULL,
  OrderCancelled BIT NOT NULL,
  ServiceDate VARCHAR(12) NOT NULL,
  ServiceTime VARCHAR(12) NOT NULL,
  ServiceAddress VARCHAR(75) NOT NULL,
  ServiceDuration INT NOT NULL,
  PackageType INT NOT NULL,
  OrderedBy INT NOT NULL,
  ServicedBy INT NOT NULL, 
  PaymentId INT,
  PRIMARY KEY (OrderId),
  FOREIGN KEY (PaymentId) REFERENCES PAYMENT(PaymentId)
);

CREATE TABLE PACKAGE
(
  PackageCost FLOAT NOT NULL,
  PackageName VARCHAR(24) NOT NULL,
  OrderId INT NOT NULL,
  FOREIGN KEY (OrderId) REFERENCES `ORDER`(OrderId)
);

CREATE TABLE Serviced
(
  OrderId INT NOT NULL,
  AdminId INT NOT NULL,
  PRIMARY KEY (OrderId, AdminId),
  FOREIGN KEY (OrderId) REFERENCES `ORDER`(OrderId),
  FOREIGN KEY (AdminId) REFERENCES ADMIN(AdminId)
);