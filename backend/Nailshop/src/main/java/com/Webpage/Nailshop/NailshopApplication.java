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

	@Autowired
	public DetailsRepository detailsRepository;
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

		ModProducts products3 = new ModProducts();
		products3.setImg("https://static.wizaz.pl/media/cache/500x500/kwc/product/188/102/102188/337123.jpeg");
		products3.setTitle("Żel");
		products3.setPrice("12");
		productRepository.save(products3);

		ModProducts products4 = new ModProducts();
		products4.setImg("https://static.wizaz.pl/media/cache/500x500/kwc/product/188/102/102188/337123.jpeg");
		products4.setTitle("Żel");
		products4.setPrice("12");
		productRepository.save(products4);

		ModDetails details1 = new ModDetails();
		details1.setImg("https://i.pinimg.com/736x/77/ec/43/77ec43bc90a76192f283466803cd830a.jpg");
		details1.setTitle("Denim Jumpsuit");
		details1.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		details1.setPrice("23 zł");
		detailsRepository.save(details1);

		ModDetails details2 = new ModDetails();
		details2.setImg("https://nails.pl/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-04-at-15.22.22-510x510.jpeg");
		details2.setTitle("Denim Jumpsuit");
		details2.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		details2.setPrice("45 zł");
		detailsRepository.save(details2);

	}
}