CREATE DATABASE  IF NOT EXISTS `openwifitask` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `openwifitask`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: openwifitask
-- ------------------------------------------------------
-- Server version	5.5.60-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `currentpetmst`
--

DROP TABLE IF EXISTS `currentpetmst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `currentpetmst` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `currentpetid` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `usermstid` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currentpetmst`
--

LOCK TABLES `currentpetmst` WRITE;
/*!40000 ALTER TABLE `currentpetmst` DISABLE KEYS */;
INSERT INTO `currentpetmst` VALUES (1,'1','A','1');
/*!40000 ALTER TABLE `currentpetmst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livelocation`
--

DROP TABLE IF EXISTS `livelocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livelocation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `livelat` varchar(512) NOT NULL,
  `livelng` varchar(512) NOT NULL,
  `status` varchar(512) DEFAULT NULL,
  `createddate` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livelocation`
--

LOCK TABLES `livelocation` WRITE;
/*!40000 ALTER TABLE `livelocation` DISABLE KEYS */;
INSERT INTO `livelocation` VALUES (1,'17.416192','78.4859136','A','2');
/*!40000 ALTER TABLE `livelocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petdetails`
--

DROP TABLE IF EXISTS `petdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `petdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `petname` varchar(512) NOT NULL,
  `breed` varchar(512) NOT NULL,
  `dob` varchar(512) NOT NULL,
  `weight` varchar(512) NOT NULL,
  `height` varchar(512) NOT NULL,
  `chipid` varchar(512) NOT NULL,
  `status` varchar(512) NOT NULL,
  `loginid` varchar(512) NOT NULL,
  `alarmstatus` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petdetails`
--

LOCK TABLES `petdetails` WRITE;
/*!40000 ALTER TABLE `petdetails` DISABLE KEYS */;
INSERT INTO `petdetails` VALUES (1,'Pinky','Oinky','2019-07-14T18:30:00.000Z','12','21','3232312','A','1','1'),(2,'Pinky1','Oinky1','2019-07-14T18:30:00.000Z','12','21','3232312','A','1','0');
/*!40000 ALTER TABLE `petdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `petlocation`
--

DROP TABLE IF EXISTS `petlocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `petlocation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` varchar(512) DEFAULT NULL,
  `longitude` varchar(512) DEFAULT NULL,
  `createddate` varchar(512) DEFAULT NULL,
  `createdtime` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `currentpet` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `petlocation`
--

LOCK TABLES `petlocation` WRITE;
/*!40000 ALTER TABLE `petlocation` DISABLE KEYS */;
INSERT INTO `petlocation` VALUES (1,'17.416192','78.4859136','5','5','A','1'),(2,'17.416192','78.4859136','6','6','A','1'),(3,'17.416192','78.4859136','7','7','A','2'),(4,'17.416192','78.4859136','8','8','A','1');
/*!40000 ALTER TABLE `petlocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usermaster`
--

DROP TABLE IF EXISTS `usermaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usermaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `mobilenumber` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `status` varchar(512) NOT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `useMe` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermaster`
--

LOCK TABLES `usermaster` WRITE;
/*!40000 ALTER TABLE `usermaster` DISABLE KEYS */;
INSERT INTO `usermaster` VALUES (1,'hemanth','7207774897','$2a$10$Quh3ow9UlGTV7rj1r7MHSe8SFaXnFzbA5TlAmRE2/LoR95FFBE5Oa','A',NULL,'hemanatham','hemantham02@gmail.com',NULL,NULL,'Nestam@3'),(2,'Hemanth','7207774897','$2a$10$gSJbthrw3I4hFUg6Qn9jkescCHCRY8rwxfbKxEHp4G0UEgOT0TGtG','A',NULL,'hemantham002','hemantham0002@gmail.com',NULL,NULL,'Nestam@0');
/*!40000 ALTER TABLE `usermaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'openwifitask'
--

--
-- Dumping routines for database 'openwifitask'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-10 20:46:38
