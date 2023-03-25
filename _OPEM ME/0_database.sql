-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2023 at 11:28 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_project_structure_demo`
--
CREATE DATABASE IF NOT EXISTS `php_project_structure_demo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `php_project_structure_demo`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
                         `id` smallint(5) UNSIGNED NOT NULL,
                         `name` varchar(50) NOT NULL,
                         `age` tinyint(3) UNSIGNED DEFAULT NULL,
                         `country` varchar(30) DEFAULT NULL,
                         `email` varchar(50) DEFAULT NULL,
                         `profile_pic` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `country`, `email`, `profile_pic`) VALUES
                                                                                 (21, 'عرشيا نكو نظر', 71, 'Iran', 'aarshy.nkwnzr@example.com', 'https://randomuser.me/api/portraits/men/22.jpg'),
                                                                                 (22, 'Ceyhan Tokgöz', 63, 'Turkey', 'ceyhan.tokgoz@example.com', 'https://randomuser.me/api/portraits/women/9.jpg'),
                                                                                 (23, 'Hanna Gilbert', 57, 'United Kingdom', 'hanna.gilbert@example.com', 'https://randomuser.me/api/portraits/women/34.jpg'),
                                                                                 (24, 'Mark Laurent', 58, 'Switzerland', 'mark.laurent@example.com', 'https://randomuser.me/api/portraits/men/6.jpg'),
                                                                                 (25, 'Reinaldo da Mota', 28, 'Brazil', 'reinaldo.damota@example.com', 'https://randomuser.me/api/portraits/men/61.jpg'),
                                                                                 (26, 'Susana Fernández', 30, 'Spain', 'susana.fernandez@example.com', 'https://randomuser.me/api/portraits/women/48.jpg'),
                                                                                 (27, 'Sarah Addy', 50, 'Canada', 'sarah.addy@example.com', 'https://randomuser.me/api/portraits/women/7.jpg'),
                                                                                 (28, 'Julija Kralj', 62, 'Serbia', 'julija.kralj@example.com', 'https://randomuser.me/api/portraits/women/92.jpg'),
                                                                                 (29, 'Carmelo Ibáñez', 23, 'Spain', 'carmelo.ibanez@example.com', 'https://randomuser.me/api/portraits/men/32.jpg'),
                                                                                 (30, 'Johannes Guerin', 44, 'Switzerland', 'johannes.guerin@example.com', 'https://randomuser.me/api/portraits/men/16.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
    ADD PRIMARY KEY (`id`),
  ADD KEY `idx_age` (`age`),
  ADD KEY `idx_country` (`country`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
    MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;