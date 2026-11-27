usersusers-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jan 2025 pada 13.27
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ahp3`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `alternatives`
--

CREATE TABLE `alternatives` (
  `id` int(11) NOT NULL,
  `nama` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `alternatives`
--

INSERT INTO `alternatives` (`id`, `nama`) VALUES
(1, 'Bus Pariwisata'),
(2, 'Mini Bus'),
(3, 'Mobil'),
(4, 'Motor'),
(5, 'Sepeda');

-- --------------------------------------------------------

--
-- Struktur dari tabel `altratios`
--

CREATE TABLE `altratios` (
  `id` int(11) NOT NULL,
  `id_crit` int(11) NOT NULL,
  `id_a1` int(11) NOT NULL,
  `id_a2` int(11) NOT NULL,
  `value` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `altratios`
--

INSERT INTO `altratios` (`id`, `id_crit`, `id_a1`, `id_a2`, `value`) VALUES
(1, 1, 1, 2, 0.5),
(2, 1, 1, 3, 2),
(3, 1, 1, 4, 0.25),
(4, 1, 1, 5, 0.2),
(5, 1, 2, 3, 2),
(6, 1, 2, 4, 0.333333),
(7, 1, 2, 5, 0.2),
(8, 1, 3, 4, 0.5),
(9, 1, 3, 5, 0.166667),
(10, 1, 4, 5, 0.333333),
(11, 2, 1, 2, 0.5),
(12, 2, 1, 3, 0.333333),
(13, 2, 1, 4, 1),
(14, 2, 1, 5, 5),
(15, 2, 2, 3, 0.5),
(16, 2, 2, 4, 1),
(17, 2, 2, 5, 2),
(18, 2, 3, 4, 1),
(19, 2, 3, 5, 2),
(20, 2, 4, 5, 0.5),
(21, 3, 1, 2, 0.5),
(22, 3, 1, 3, 0.5),
(23, 3, 1, 4, 2),
(24, 3, 1, 5, 5),
(25, 3, 2, 3, 0.5),
(26, 3, 2, 4, 0.5),
(27, 3, 2, 5, 5),
(28, 3, 3, 4, 0.5),
(29, 3, 3, 5, 2),
(30, 3, 4, 5, 0.5),
(31, 4, 1, 2, 1),
(32, 4, 1, 3, 1),
(33, 4, 1, 4, 2),
(34, 4, 1, 5, 5),
(35, 4, 2, 3, 1),
(36, 4, 2, 4, 1),
(37, 4, 2, 5, 2),
(38, 4, 3, 4, 1),
(39, 4, 3, 5, 2),
(40, 4, 4, 5, 1),
(41, 5, 1, 2, 0.5),
(42, 5, 1, 3, 0.5),
(43, 5, 1, 4, 0.5),
(44, 5, 1, 5, 0.2),
(45, 5, 2, 3, 0.5),
(46, 5, 2, 4, 0.333333),
(47, 5, 2, 5, 0.333333),
(48, 5, 3, 4, 0.333333),
(49, 5, 3, 5, 0.5),
(50, 5, 4, 5, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `criterias`
--

CREATE TABLE `criterias` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `criterias`
--

INSERT INTO `criterias` (`id`, `nama`) VALUES
(1, 'Biaya'),
(2, 'Keamanan'),
(3, 'kenyamanan'),
(4, 'Ketersediaan Tempat'),
(5, 'Dampak Lingkungan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `critratios`
--

CREATE TABLE `critratios` (
  `id` int(11) NOT NULL,
  `id_c1` int(11) NOT NULL,
  `id_c2` int(11) NOT NULL,
  `value` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `critratios`
--

INSERT INTO `critratios` (`id`, `id_c1`, `id_c2`, `value`) VALUES
(1, 1, 2, 0.5),
(2, 1, 3, 0.333333),
(3, 1, 4, 1),
(4, 1, 5, 2),
(5, 2, 3, 0.5),
(6, 2, 4, 1),
(7, 2, 5, 2),
(8, 3, 4, 1),
(9, 3, 5, 1),
(10, 4, 5, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

ahp3ahp3ahp3ahp3INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'dimas', 'dimas@gmail.com', 'pbkdf2:sha256:1000000$ygkB1B9XMqzhjVYF$5ffd1f3f47f61c60aa7638ab33f651372aa9d0822d41d9479550f904049f73e1', 'user'),
(2, 'admin', 'admin1@gmail.com', 'pbkdf2:sha256:1000000$5N7H6ohBZWm8l9ld$c5f611d913a5892d850373620aebe15b33181278732e6f703a612391a524ac40', 'admin'),
(3, 'user', 'user1@gmail.com', 'pbkdf2:sha256:1000000$hd2BBXh8aTD4aaxP$d274801b0f01b3fb8f360a45629f3c250e98c09c8579daa8c077045ed00466e9', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `alternatives`
--
ALTER TABLE `alternatives`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `altratios`
--
ALTER TABLE `altratios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_crit` (`id_crit`),
  ADD KEY `id_a1` (`id_a1`),
  ADD KEY `id_a2` (`id_a2`);

--
-- Indeks untuk tabel `criterias`
--
ALTER TABLE `criterias`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `critratios`
--
ALTER TABLE `critratios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_c1` (`id_c1`),
  ADD KEY `id_c2` (`id_c2`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `alternatives`
--
ALTER TABLE `alternatives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `altratios`
--
ALTER TABLE `altratios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT untuk tabel `criterias`
--
ALTER TABLE `criterias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `critratios`
--
ALTER TABLE `critratios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `altratios`
--
ALTER TABLE `altratios`
  ADD CONSTRAINT `altratios_ibfk_1` FOREIGN KEY (`id_crit`) REFERENCES `criterias` (`id`),
  ADD CONSTRAINT `altratios_ibfk_2` FOREIGN KEY (`id_a1`) REFERENCES `alternatives` (`id`),
  ADD CONSTRAINT `altratios_ibfk_3` FOREIGN KEY (`id_a2`) REFERENCES `alternatives` (`id`);

--
-- Ketidakleluasaan untuk tabel `critratios`
--
ALTER TABLE `critratios`
  ADD CONSTRAINT `critratios_ibfk_1` FOREIGN KEY (`id_c1`) REFERENCES `criterias` (`id`),
  ADD CONSTRAINT `critratios_ibfk_2` FOREIGN KEY (`id_c2`) REFERENCES `criterias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
