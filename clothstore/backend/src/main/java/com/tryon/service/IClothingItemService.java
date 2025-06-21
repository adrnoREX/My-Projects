package com.tryon.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.tryon.model.ClothingItem;

@Service
public interface IClothingItemService {
    
    ClothingItem saveClothingItem(ClothingItem clothingItem);
    ClothingItem getClothingItemById(int id);
    List<ClothingItem> getAllClothingItems();
    List<ClothingItem> getClothingItemByCategory(String category);
    List<ClothingItem> getClothingItemBySubcategory(String subcategory);
    ClothingItem updateClothingItem(ClothingItem clothingItem);
    String deleteById(int id);
    
}