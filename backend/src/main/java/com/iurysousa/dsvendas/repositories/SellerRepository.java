package com.iurysousa.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iurysousa.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
