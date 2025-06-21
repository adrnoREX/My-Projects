package com.tryon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tryon.model.ClothingItem;
import com.tryon.repository.ClothingItemRepository;

@Service
public class ClothingItemService implements IClothingItemService {

    @Autowired
    ClothingItemRepository clothingItemRepository;

    @Override
    public ClothingItem saveClothingItem(ClothingItem clothingItem) {		
		return clothingItemRepository.save(clothingItem);
	}

    @Override
	public ClothingItem getClothingItemById(int id) {
		return clothingItemRepository.findById(id).get();
	}

    @Override
	public List<ClothingItem> getAllClothingItems() {
		return clothingItemRepository.findAll();
	}

	@Override
	public List<ClothingItem> getClothingItemByCategory(String category) {
		return clothingItemRepository.findByCategoryIgnoreCase(category);
	}

	@Override
	public List<ClothingItem> getClothingItemBySubcategory(String subcategory) {
		return clothingItemRepository.findBySubcategoryIgnoreCase(subcategory);
	}


    @Override
	public ClothingItem updateClothingItem(ClothingItem clothingItem) {
		ClothingItem b=getClothingItemById(clothingItem.getId());
		b.setName(clothingItem.getName());
		b.setDescription(clothingItem.getDescription());
		b.setPrice(clothingItem.getPrice());
		b.setImageUrl(clothingItem.getImageUrl());
		b.setCategory(clothingItem.getCategory());
		b.setSubcategory(clothingItem.getSubcategory());
		return clothingItemRepository.save(b);
	}

    @Override
	public String deleteById(int id) {
		clothingItemRepository.deleteById(id);
		return "Item deleted successfully";
	}
}
