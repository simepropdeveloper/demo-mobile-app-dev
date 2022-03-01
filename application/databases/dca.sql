-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2022 at 09:31 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dca`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `admin_uid` varchar(64) NOT NULL,
  `admin_type` tinyint(1) NOT NULL COMMENT '0:normal|1:root',
  `property_mgmt` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `admin_uid`, `admin_type`, `property_mgmt`, `is_deleted`) VALUES
(1, 'admin01', 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `api_config`
--

CREATE TABLE `api_config` (
  `id` int(11) NOT NULL,
  `app_id` varchar(16) CHARACTER SET utf8mb4 NOT NULL,
  `api_key` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
  `secret_key` varchar(64) CHARACTER SET utf8mb4 NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `api_config`
--

INSERT INTO `api_config` (`id`, `app_id`, `api_key`, `secret_key`, `is_deleted`) VALUES
(1, 'dca', 'nx3ksx2azqse975ffdqrxkd222xehd2h', 'qwgyqn2bwjuz8bz6j576jv97swundarf8xxapkg8jwewd84knwezj6qtgc2xvmtn', 0);

-- --------------------------------------------------------

--
-- Table structure for table `api_inbound_log`
--

CREATE TABLE `api_inbound_log` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `app_id` varchar(16) CHARACTER SET utf8mb4 NOT NULL,
  `endpoint` varchar(128) CHARACTER SET utf8mb4 NOT NULL,
  `params` text CHARACTER SET utf8mb4 NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `response` text CHARACTER SET utf8mb4 NOT NULL,
  `response_at` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `id` int(11) NOT NULL,
  `display_name` varchar(64) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`id`, `display_name`, `is_deleted`) VALUES
(1, 'No 1, Street 1', 0),
(2, 'No 2, Street 2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(64) NOT NULL,
  `property_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `plate_no` varchar(16) NOT NULL,
  `mobile_no` varchar(16) NOT NULL,
  `entry_type` int(11) NOT NULL DEFAULT 1,
  `date` date DEFAULT NULL,
  `approval` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0:no need approval | 1: approval upon arrival',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_config`
--
ALTER TABLE `api_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_inbound_log`
--
ALTER TABLE `api_inbound_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `api_config`
--
ALTER TABLE `api_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `api_inbound_log`
--
ALTER TABLE `api_inbound_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `visitor`
--
ALTER TABLE `visitor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
