package com.tryon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tryon.model.ClothingItem;
import com.tryon.service.IClothingItemService;
@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/clothes")

public class ClothingItemController {

    @Autowired
    IClothingItemService clothingItemService;

    // Get all items
    @GetMapping
    public List<ClothingItem> getAllClothingItems() {
        return clothingItemService.getAllClothingItems();
    }

    // Get item by ID
    @GetMapping("/{id}")
    public ClothingItem getClothingItem(@PathVariable int id) {
        return clothingItemService.getClothingItemById(id);
    }

    // Get item by Category
    @GetMapping("/category/{category}")
    public List<ClothingItem> getItemsByCategory(@PathVariable String category) {
        return clothingItemService.getClothingItemByCategory(category);
    }

    // Get item by Subcategory
    @GetMapping("/subcategory/{subcategory}")
    public List<ClothingItem> getItemsBySubcategory(@PathVariable String subcategory) {
        return clothingItemService.getClothingItemBySubcategory(subcategory);
    }

    // Add new item
    @PostMapping
    public ClothingItem saveClothingItem(@RequestBody ClothingItem item) {
        return clothingItemService.saveClothingItem(item);
    }

    // Update item by ID
    @PutMapping("/{id}")
    public ClothingItem updateClothingItem(@PathVariable int id, @RequestBody ClothingItem item) {
        item.setId(id);
        return clothingItemService.updateClothingItem(item);
    }

    // Delete item by ID
    @DeleteMapping("/{id}")
    public String deleteClothingItem(@PathVariable int id) {
        return clothingItemService.deleteById(id);
    }
}
