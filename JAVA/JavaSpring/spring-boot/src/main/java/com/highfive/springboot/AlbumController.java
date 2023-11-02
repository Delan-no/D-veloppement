package com.highfive.springboot;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // ceci signifie que cette classe est un controlleur;
@RequestMapping(path= "/api") // Ceci signifie que l'URL commence par / api (apèrs  l'url de l'application)

public class AlbumController {

    @Autowired // ceci demande en java d'injecter le "bean" albumRepository
    AlbumRepository albumRepository; // instance du bean AlbumRepository

	@GetMapping(path = "/albums")
	public Iterable<Album> getAlbums() {
        //localhost:3000/api/albums
        return this.albumRepository.findAll();
	}

	private List<Album> generateAlbums() {
		// pour la simplicité, on retourne un tableau vide
		Album album1 = new Album(
		"Zouk", 
		"Les rouages de l'amour", 
		"Mr.Love", 
		"...", 
		3000, 
		"true",			
		"https://love.com/album1", 
		Arrays.asList("love", "good"), 
		"like");


		Album album2 = new Album(
		"hip-hop", 
		"Les rouages de l'amour", 
		"Mr.Love", 
		" \"Get Rich or Die Tryin\" a été un énorme succès commercial, vendant des millions d'exemplaires et établissant 50 Cent comme l'un des artistes hip-hop les plus influents de son époque. Cet album a contribué à façonner le paysage musical du début des années 2000 et reste un classique du genre.", 
		3000, 
		"true",			
		"https://love.com/album1", 
		Arrays.asList("love", "good"), 
		"like");


		Album album3 = new Album(
		"Zouk", 
		"Les rouages de l'amour", 
		"Mr.Love", 
		"...", 
		3000, 
		"true",			
		"https://love.com/album1", 
		Arrays.asList("love", "good"), 
		"like");

		System.out.println(album1);

		return Arrays.asList(album1, album2, album3);
	}
}
