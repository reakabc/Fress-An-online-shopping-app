-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 06:40 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fress`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `time` varchar(30) NOT NULL,
  PRIMARY KEY (`cart_item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_item_id`, `user_id`, `item_id`, `quantity`, `time`) VALUES
(28, 16, 14, 1, '11:44:30 2021-01-31'),
(27, 16, 19, 1, '11:44:13 2021-01-31'),
(26, 16, 20, 1, '11:44:10 2021-01-31'),
(29, 14, 17, 1, '12:08:30 2021-01-31'),
(30, 14, 19, 1, '12:08:36 2021-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `highlights` varchar(500) NOT NULL,
  `type` varchar(20) NOT NULL,
  `rate` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `image` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `date` varchar(30) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `uid`, `title`, `highlights`, `type`, `rate`, `price`, `image`, `quantity`, `date`) VALUES
(19, 16, 'Brinjal', 'Best quality with great taste brinjal being found in whole world', 'veg', 'Rs.45/Kg', 45, 'img/Brinjal.jpg', 20, '06:11:59 2021-01-31'),
(18, 16, 'Loky', 'Finest and purest loky available in Bihar, North East India', 'veg', 'Rs.35/Kg', 35, 'img/Loky.jpg', 20, '06:10:18 2021-01-31'),
(17, 15, 'Orange', 'The best one quality being found in India and distributed to whole Bihar & Jharkhand', 'fruit', 'Rs.85/Kg', 85, 'img/Orange.jpg', 20, '19:45:32 2021-01-30'),
(16, 15, 'Apple', 'Best quality apple from shreenagar for north east India', 'fruit', 'Rs.125/Kg', 125, 'img/Apple.jpg', 20, '19:38:43 2021-01-30'),
(15, 15, 'Banana', 'Most demanded banana of North East India for body building', 'fruit', 'Rs.65/Dozen', 65, 'img/Banana.jpg', 20, '19:33:52 2021-01-30'),
(14, 14, 'Pomegranate', 'Best quality pomegranate available in north east India', 'fruit', 'Rs.255/Kg', 255, 'img/Pomegranate.jpg', 20, '19:28:21 2021-01-30'),
(13, 14, 'Grapes', 'This is one of the most used fruit of hot summer in north east India', 'fruit', 'Rs.145/Kg', 145, 'img/Grapes.jpg', 20, '19:25:12 2021-01-30'),
(12, 14, 'Guava', 'This most sweet and testy guava being found in north east India', 'fruit', 'Rs.75/Kg', 75, 'img/Guava.jpg', 20, '19:17:56 2021-01-30'),
(20, 16, 'Cauli Flower', 'This is best one vegetable for winter season in north east india ', 'veg', 'Rs.45/Kg', 45, 'img/Cauli Flower.jpg', 20, '06:13:18 2021-01-31');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `address` varchar(200) NOT NULL,
  `order_time` varchar(30) NOT NULL,
  `delivery_time` varchar(30) NOT NULL,
  `payment_status` tinyint(1) NOT NULL,
  `order_status` varchar(20) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `item_id`, `quantity`, `amount`, `address`, `order_time`, `delivery_time`, `payment_status`, `order_status`) VALUES
(30, 14, 19, 1, 45, '', '12:08:48 2021-01-31', '00:00 00-00-2021', 1, 'Placed'),
(29, 14, 17, 1, 85, '', '12:08:48 2021-01-31', '00:00 00-00-2021', 1, 'Placed'),
(28, 16, 16, 1, 125, '', '11:44:42 2021-01-31', '00:00 00-00-2021', 1, 'Placed'),
(26, 16, 19, 1, 45, '', '11:44:42 2021-01-31', '00:00 00-00-2021', 1, 'Placed'),
(27, 16, 20, 1, 45, '', '11:44:42 2021-01-31', '00:00 00-00-2021', 1, 'Placed'),
(25, 16, 14, 1, 255, '', '11:44:42 2021-01-31', '00:00 00-00-2021', 1, 'Placed');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `image` text NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `mobile`, `image`, `password`) VALUES
(14, 'RocK AbC', 'rockabc@gmail.com', '9123456789', 'pic/9123456789.png', '123'),
(15, 'Nitish Kumar', 'nk@gmail.com', '9123456788', 'pic/9123456788.jpg', '123'),
(16, 'Loky', 'loky@veg.com', '9123456777', 'pic/9123456777.jpg', '123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
