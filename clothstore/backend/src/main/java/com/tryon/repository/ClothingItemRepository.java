
package com.tryon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tryon.model.ClothingItem;

public interface ClothingItemRepository extends JpaRepository<ClothingItem, Integer> {
    List<ClothingItem> findByCategoryIgnoreCase(String category);
    List<ClothingItem> findBySubcategoryIgnoreCase(String subcategory);
}
