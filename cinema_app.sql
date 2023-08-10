-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2023 at 03:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking_movie`
--

CREATE TABLE `booking_movie` (
  `booking_id` varchar(255) NOT NULL,
  `movie_show_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `number_of_seats` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_seat`
--

CREATE TABLE `booking_seat` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` varchar(255) NOT NULL,
  `seat_number` varchar(255) NOT NULL,
  `cinema_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cinema`
--

CREATE TABLE `cinema` (
  `cinema_id` varchar(255) NOT NULL,
  `cinema_name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cinema`
--

INSERT INTO `cinema` (`cinema_id`, `cinema_name`, `city`) VALUES
('CN-JKT-1', 'Grand Indonesia XXI', 'Jakarta'),
('CN-MDN-1', 'Sun Plaza XXI', 'Medan');

-- --------------------------------------------------------

--
-- Table structure for table `cinema_and_hall`
--

CREATE TABLE `cinema_and_hall` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cinema_id` varchar(255) NOT NULL,
  `cinema_hall_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cinema_and_hall`
--

INSERT INTO `cinema_and_hall` (`id`, `cinema_id`, `cinema_hall_id`) VALUES
(1, 'CN-MDN-1', 'H01'),
(2, 'CN-MDN-1', 'H02'),
(3, 'CN-JKT-1', 'H01'),
(4, 'CN-JKT-1', 'H02');

-- --------------------------------------------------------

--
-- Table structure for table `cinema_hall`
--

CREATE TABLE `cinema_hall` (
  `cinema_hall_id` varchar(255) NOT NULL,
  `cinema_hall_name` varchar(255) NOT NULL,
  `cinema_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cinema_hall`
--

INSERT INTO `cinema_hall` (`cinema_hall_id`, `cinema_hall_name`, `cinema_id`) VALUES
('H01', 'Hall 1', 'CN-MDN-1'),
('H02', 'Hall 2', 'CN-JKT-1');

-- --------------------------------------------------------

--
-- Table structure for table `cinema_seat`
--

CREATE TABLE `cinema_seat` (
  `seat_number` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cinema_seat`
--

INSERT INTO `cinema_seat` (`seat_number`, `type`, `price`) VALUES
('A1', 'Premium', 100000),
('A2', 'Premium', 100000),
('A3', 'Premium', 100000),
('A4', 'Premium', 100000),
('A5', 'Premium', 100000),
('A6', 'Premium', 100000),
('B1', 'Premium', 100000),
('B2', 'Premium', 100000),
('B3', 'Premium', 100000),
('B4', 'Premium', 100000),
('B5', 'Premium', 100000),
('B6', 'Premium', 100000),
('B7', 'Premium', 100000),
('B8', 'Premium', 100000),
('C1', 'Premium', 100000),
('C2', 'Premium', 100000),
('C3', 'Premium', 100000),
('C4', 'Premium', 100000),
('C5', 'Premium', 100000),
('C6', 'Premium', 100000),
('C7', 'Premium', 100000),
('C8', 'Premium', 100000),
('D1', 'Regular', 80000),
('D2', 'Regular', 80000),
('D3', 'Regular', 80000),
('D4', 'Regular', 80000),
('D5', 'Regular', 80000),
('D6', 'Regular', 80000),
('D7', 'Regular', 80000),
('D8', 'Regular', 80000),
('E1', 'Regular', 80000),
('E2', 'Regular', 80000),
('E3', 'Regular', 80000),
('E4', 'Regular', 80000),
('E5', 'Regular', 80000),
('E6', 'Regular', 80000),
('E7', 'Regular', 80000),
('E8', 'Regular', 80000),
('F1', 'Classic', 60000),
('F2', 'Classic', 60000),
('F3', 'Classic', 60000),
('F4', 'Classic', 60000),
('F5', 'Classic', 60000),
('F6', 'Classic', 60000),
('F7', 'Classic', 60000),
('F8', 'Classic', 60000),
('G1', 'Classic', 60000),
('G2', 'Classic', 60000),
('G3', 'Classic', 60000),
('G4', 'Classic', 60000),
('G5', 'Classic', 60000),
('G6', 'Classic', 60000),
('G7', 'Classic', 60000),
('G8', 'Classic', 60000),
('H1', 'Classic', 60000),
('H2', 'Classic', 60000),
('H3', 'Classic', 60000),
('H4', 'Classic', 60000),
('H5', 'Classic', 60000),
('H6', 'Classic', 60000);

-- --------------------------------------------------------

--
-- Table structure for table `hall_and_seat`
--

CREATE TABLE `hall_and_seat` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cinema_hall_id` varchar(255) NOT NULL,
  `seat_number` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hall_and_seat`
--

INSERT INTO `hall_and_seat` (`id`, `cinema_hall_id`, `seat_number`, `status`) VALUES
(1, 'H01', 'A1', 'booked'),
(2, 'H01', 'A2', 'selected'),
(3, 'H01', 'A3', 'available'),
(4, 'H01', 'A4', 'available'),
(5, 'H01', 'A5', 'available'),
(6, 'H01', 'A6', 'available'),
(7, 'H01', 'B1', 'available'),
(8, 'H01', 'B2', 'available'),
(9, 'H01', 'B3', 'available'),
(10, 'H01', 'B4', 'available'),
(11, 'H01', 'B5', 'available'),
(12, 'H01', 'B6', 'available'),
(13, 'H01', 'B7', 'available'),
(14, 'H01', 'B8', 'available'),
(15, 'H01', 'C1', 'available'),
(16, 'H01', 'C2', 'available'),
(17, 'H01', 'C3', 'available'),
(18, 'H01', 'C4', 'available'),
(19, 'H01', 'C5', 'available'),
(20, 'H01', 'C6', 'available'),
(21, 'H01', 'C7', 'available'),
(22, 'H01', 'C8', 'available'),
(23, 'H01', 'D1', 'available'),
(24, 'H01', 'D2', 'available'),
(25, 'H01', 'D3', 'available'),
(26, 'H01', 'D4', 'available'),
(27, 'H01', 'D5', 'available'),
(28, 'H01', 'D6', 'available'),
(29, 'H01', 'D7', 'available'),
(30, 'H01', 'D8', 'available'),
(31, 'H01', 'E1', 'available'),
(32, 'H01', 'E2', 'available'),
(33, 'H01', 'E3', 'available'),
(34, 'H01', 'E4', 'available'),
(35, 'H01', 'E5', 'available'),
(36, 'H01', 'E6', 'available'),
(37, 'H01', 'E7', 'available'),
(38, 'H01', 'E8', 'available'),
(39, 'H01', 'F1', 'available'),
(40, 'H01', 'F2', 'available'),
(41, 'H01', 'F3', 'available'),
(42, 'H01', 'F4', 'available'),
(43, 'H01', 'F5', 'available'),
(44, 'H01', 'F6', 'available'),
(45, 'H01', 'F7', 'available'),
(46, 'H01', 'F8', 'available'),
(47, 'H01', 'G1', 'available'),
(48, 'H01', 'G2', 'available'),
(49, 'H01', 'G3', 'available'),
(50, 'H01', 'G4', 'available'),
(51, 'H01', 'G5', 'available'),
(52, 'H01', 'G6', 'available'),
(53, 'H01', 'G7', 'available'),
(54, 'H01', 'G8', 'available'),
(55, 'H01', 'H1', 'available'),
(56, 'H01', 'H2', 'available'),
(57, 'H01', 'H3', 'available'),
(58, 'H01', 'H4', 'available'),
(59, 'H01', 'H5', 'available'),
(60, 'H01', 'H6', 'available'),
(61, 'H02', 'A1', 'available'),
(62, 'H02', 'A2', 'available'),
(63, 'H02', 'A3', 'available'),
(64, 'H02', 'A4', 'available'),
(65, 'H02', 'A5', 'available'),
(66, 'H02', 'A6', 'available'),
(67, 'H02', 'B1', 'available'),
(68, 'H02', 'B2', 'available'),
(69, 'H02', 'B3', 'available'),
(70, 'H02', 'B4', 'available'),
(71, 'H02', 'B5', 'available'),
(72, 'H02', 'B6', 'available'),
(73, 'H02', 'B7', 'available'),
(74, 'H02', 'B8', 'available'),
(75, 'H02', 'C1', 'available'),
(76, 'H02', 'C2', 'available'),
(77, 'H02', 'C3', 'available'),
(78, 'H02', 'C4', 'available'),
(79, 'H02', 'C5', 'available'),
(80, 'H02', 'C6', 'available'),
(81, 'H02', 'C7', 'available'),
(82, 'H02', 'C8', 'available'),
(83, 'H02', 'D1', 'available'),
(84, 'H02', 'D2', 'available'),
(85, 'H02', 'D3', 'available'),
(86, 'H02', 'D4', 'available'),
(87, 'H02', 'D5', 'available'),
(88, 'H02', 'D6', 'available'),
(89, 'H02', 'D7', 'available'),
(90, 'H02', 'D8', 'available'),
(91, 'H02', 'E1', 'available'),
(92, 'H02', 'E2', 'available'),
(93, 'H02', 'E3', 'available'),
(94, 'H02', 'E4', 'available'),
(95, 'H02', 'E5', 'available'),
(96, 'H02', 'E6', 'available'),
(97, 'H02', 'E7', 'available'),
(98, 'H02', 'E8', 'available'),
(99, 'H02', 'F1', 'available'),
(100, 'H02', 'F2', 'available'),
(101, 'H02', 'F3', 'available'),
(102, 'H02', 'F4', 'available'),
(103, 'H02', 'F5', 'available'),
(104, 'H02', 'F6', 'available'),
(105, 'H02', 'F7', 'available'),
(106, 'H02', 'F8', 'available'),
(107, 'H02', 'G1', 'available'),
(108, 'H02', 'G2', 'available'),
(109, 'H02', 'G3', 'available'),
(110, 'H02', 'G4', 'available'),
(111, 'H02', 'G5', 'available'),
(112, 'H02', 'G6', 'available'),
(113, 'H02', 'G7', 'available'),
(114, 'H02', 'G8', 'available'),
(115, 'H02', 'H1', 'available'),
(116, 'H02', 'H2', 'available'),
(117, 'H02', 'H3', 'available'),
(118, 'H02', 'H4', 'available'),
(119, 'H02', 'H5', 'available'),
(120, 'H02', 'H6', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(87, '2023_08_07_103607_create_cinema_table', 1),
(88, '2023_08_07_104333_create_cinema_hall_table', 2),
(89, '2023_08_07_133959_create_cinema_and_hall_table', 3),
(90, '2014_10_12_000000_create_users_table', 4),
(91, '2014_10_12_100000_create_password_reset_tokens_table', 4),
(92, '2019_08_19_000000_create_failed_jobs_table', 4),
(93, '2019_12_14_000001_create_personal_access_tokens_table', 4),
(94, '2023_08_07_105328_create_cinema_seat_table', 5),
(95, '2023_08_07_135858_create_hall_and_seat_table', 6),
(96, '2023_08_07_104726_create_movie_show_table', 7),
(97, '2023_08_08_095600_create_user_cinema_table', 8),
(98, '2023_08_08_100018_create_user_cinema_table', 9),
(99, '2023_08_08_093549_create_booking_movie_table', 10),
(100, '2023_08_08_104701_create_booking_seat_table', 11),
(101, '2023_08_08_133025_create_booking_seat_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `movie_show`
--

CREATE TABLE `movie_show` (
  `movie_show_id` varchar(255) NOT NULL,
  `cinema_hall_id` varchar(255) NOT NULL,
  `movie_id` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `start_time` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `movie_show`
--

INSERT INTO `movie_show` (`movie_show_id`, `cinema_hall_id`, `movie_id`, `date`, `start_time`, `end_time`) VALUES
('MS01', 'H01', '614479', '2023-08-14', '14.00 PM', '16.00 PM'),
('MS02', 'H02', '614479', '2023-08-14', '14.50 PM', '16.50 PM'),
('MS03', 'H01', '614479', '2023-09-10', '13.00 PM', '15.00 PM');

-- --------------------------------------------------------

--
-- Table structure for table `user_cinema`
--

CREATE TABLE `user_cinema` (
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_cinema`
--

INSERT INTO `user_cinema` (`user_id`, `name`, `email`, `password`) VALUES
('US001', 'User', 'user@gmail.com', 'user123'),
('US002', 'Admin', 'admin@gmail.com', 'admin123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_movie`
--
ALTER TABLE `booking_movie`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `booking_movie_movie_show_id_foreign` (`movie_show_id`),
  ADD KEY `booking_movie_user_id_foreign` (`user_id`);

--
-- Indexes for table `booking_seat`
--
ALTER TABLE `booking_seat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_seat_booking_id_foreign` (`booking_id`),
  ADD KEY `booking_seat_seat_number_foreign` (`seat_number`),
  ADD KEY `booking_seat_cinema_id_foreign` (`cinema_id`);

--
-- Indexes for table `cinema`
--
ALTER TABLE `cinema`
  ADD PRIMARY KEY (`cinema_id`);

--
-- Indexes for table `cinema_and_hall`
--
ALTER TABLE `cinema_and_hall`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cinema_and_hall_cinema_id_foreign` (`cinema_id`),
  ADD KEY `cinema_and_hall_cinema_hall_id_foreign` (`cinema_hall_id`);

--
-- Indexes for table `cinema_hall`
--
ALTER TABLE `cinema_hall`
  ADD PRIMARY KEY (`cinema_hall_id`),
  ADD KEY `idx_cinema` (`cinema_id`);

--
-- Indexes for table `cinema_seat`
--
ALTER TABLE `cinema_seat`
  ADD PRIMARY KEY (`seat_number`);

--
-- Indexes for table `hall_and_seat`
--
ALTER TABLE `hall_and_seat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hall_and_seat_cinema_hall_id_foreign` (`cinema_hall_id`),
  ADD KEY `hall_and_seat_seat_number_foreign` (`seat_number`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie_show`
--
ALTER TABLE `movie_show`
  ADD PRIMARY KEY (`movie_show_id`),
  ADD KEY `movie_show_cinema_hall_id_foreign` (`cinema_hall_id`);

--
-- Indexes for table `user_cinema`
--
ALTER TABLE `user_cinema`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_cinema_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_seat`
--
ALTER TABLE `booking_seat`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cinema_and_hall`
--
ALTER TABLE `cinema_and_hall`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hall_and_seat`
--
ALTER TABLE `hall_and_seat`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_movie`
--
ALTER TABLE `booking_movie`
  ADD CONSTRAINT `booking_movie_movie_show_id_foreign` FOREIGN KEY (`movie_show_id`) REFERENCES `movie_show` (`movie_show_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_movie_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user_cinema` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `booking_seat`
--
ALTER TABLE `booking_seat`
  ADD CONSTRAINT `booking_seat_booking_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `booking_movie` (`booking_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_seat_cinema_id_foreign` FOREIGN KEY (`cinema_id`) REFERENCES `cinema` (`cinema_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_seat_seat_number_foreign` FOREIGN KEY (`seat_number`) REFERENCES `cinema_seat` (`seat_number`) ON DELETE CASCADE;

--
-- Constraints for table `cinema_and_hall`
--
ALTER TABLE `cinema_and_hall`
  ADD CONSTRAINT `cinema_and_hall_cinema_hall_id_foreign` FOREIGN KEY (`cinema_hall_id`) REFERENCES `cinema_hall` (`cinema_hall_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cinema_and_hall_cinema_id_foreign` FOREIGN KEY (`cinema_id`) REFERENCES `cinema` (`cinema_id`) ON DELETE CASCADE;

--
-- Constraints for table `hall_and_seat`
--
ALTER TABLE `hall_and_seat`
  ADD CONSTRAINT `hall_and_seat_cinema_hall_id_foreign` FOREIGN KEY (`cinema_hall_id`) REFERENCES `cinema_hall` (`cinema_hall_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `hall_and_seat_seat_number_foreign` FOREIGN KEY (`seat_number`) REFERENCES `cinema_seat` (`seat_number`) ON DELETE CASCADE;

--
-- Constraints for table `movie_show`
--
ALTER TABLE `movie_show`
  ADD CONSTRAINT `movie_show_cinema_hall_id_foreign` FOREIGN KEY (`cinema_hall_id`) REFERENCES `cinema_hall` (`cinema_hall_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
