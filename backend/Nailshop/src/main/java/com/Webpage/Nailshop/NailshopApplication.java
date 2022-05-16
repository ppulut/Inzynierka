package com.Webpage.Nailshop;

import com.Webpage.Nailshop.repository.*;
import com.Webpage.Nailshop.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.boot.CommandLineRunner;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@RequestMapping("/nails")
public class NailshopApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(NailshopApplication.class, args);
	}

	@Autowired
	public ProductRepository productRepository;
	@Override
	public void run(String... args) throws Exception {

		ModProducts products1 = new ModProducts();
		products1.setImg("https://claresa.pl/userdata/public/gfx/2788/sparkle-3%2C-lakier-hybrydowy-z-brokatem.jpg");
		products1.setTitle("Hybryda");
		products1.setPrice("200zl");
		productRepository.save(products1);

		ModProducts products2 = new ModProducts();
		products2.setImg("https://static.wizaz.pl/media/cache/500x500/kwc/product/188/102/102188/337123.jpeg");
		products2.setTitle("Żel");
		products2.setPrice("12");
		productRepository.save(products2);

	}
}