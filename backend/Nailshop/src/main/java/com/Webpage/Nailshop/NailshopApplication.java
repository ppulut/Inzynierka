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

	@Autowired
	public CategoryRepository categoryRepository;

	@Autowired
	public PriceRepository priceRepository;

	@Autowired
	public ServiceRepository serviceRepository;

	@Autowired
	public Reservation reservation;

	@Autowired
	public ProblemsRepository problemsRepository;


	@Override
	public void run(String... args) throws Exception {

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

		ModDetails details3 = new ModDetails();
		details3.setImg("https://nails.pl/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-04-at-15.22.22-510x510.jpeg");
		details3.setTitle("Denim Jumpsuit");
		details3.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		details3.setPrice("00 zł");
		detailsRepository.save(details3);

		ModDetails details4 = new ModDetails();
		details4.setImg("https://nails.pl/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-04-at-15.22.22-510x510.jpeg");
		details4.setTitle("fghnfgnng");
		details4.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		details4.setPrice("4123123123 zł");
		detailsRepository.save(details4);

		ModProducts products1 = new ModProducts();
		products1.setImg("https://claresa.pl/userdata/public/gfx/2788/sparkle-3%2C-lakier-hybrydowy-z-brokatem.jpg");
		products1.setTitle("Hybryda");
		products1.setPrice("80 zł");
		products1.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products1);

		ModProducts products2 = new ModProducts();
		products2.setImg("https://static.wizaz.pl/media/cache/500x500/kwc/product/188/102/102188/337123.jpeg");
		products2.setTitle("Lakier żelowy");
		products2.setPrice("100 zł");
		products2.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products2);

		ModProducts products3 = new ModProducts();
		products3.setImg("https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg");
		products3.setTitle("Zdobienia");
		products3.setPrice("1-5 zł");
		products3.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products3);

		ModProducts products4 = new ModProducts();
		products4.setImg("https://eremcosmetics.pl/userdata/public/gfx/156.jpg");
		products4.setTitle("Baza");
		products4.setPrice("49 zł");
		products4.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products4);

		ModProducts products5 = new ModProducts();
		products5.setImg("https://paatal.pl/data/gfx/pictures/medium/3/4/14243_2.jpg");
		products5.setTitle("Akrylożel");
		products5.setPrice("39 zł");
		products5.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products5);

		ModProducts products6 = new ModProducts();
		products6.setImg("https://nails.pl/wp-content/uploads/2017/08/formy-510x510.jpeg");
		products6.setTitle("Formy do stylizacji");
		products6.setPrice("25 zł");
		products6.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products6);

		ModProducts products7 = new ModProducts();
		products7.setImg("https://nails.pl/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-04-at-15.22.22-510x510.jpeg");
		products7.setTitle("Pędzel do zdobień roz.7");
		products7.setPrice("24 zł");
		products7.setOpis("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada");
		productRepository.save(products7);



		ModCategory category1 = new ModCategory();
		category1.setLink("PriceList");
		category1.setImg("https://media.istockphoto.com/photos/beautiful-woman-with-red-lips-and-manicure-picture-id873929080?k=20&m=873929080&s=612x612&w=0&h=3uxy3CJPXfPaqxnLhMYFMpCLElks88nqZwbH3Am0_RQ=");
		category1.setTitle("CENNIK");
		categoryRepository.save(category1);

		ModCategory category2 = new ModCategory();
		category2.setLink("Services");
		category2.setImg("https://media.istockphoto.com/photos/hardware-removal-of-the-old-shellac-from-the-nails-in-the-salon-by-picture-id1184545294?k=20&m=1184545294&s=612x612&w=0&h=KvbshnuX6jjTT8h5rSMTqeyzTTSe6vg8H5ZvZBZi-cY=");
		category2.setTitle("OPIS USŁUG");
		categoryRepository.save(category2);

		/*ModCategory category3 = new ModCategory();
		category3.setLink("ProductsPage");
		category3.setImg("https://media.istockphoto.com/photos/young-beautiful-asian-woman-using-smart-phone-and-credit-card-for-picture-id1035462566?k=20&m=1035462566&s=612x612&w=0&h=zMmTLkh9N2Y52sEUPC25QwNytydwXuDyl64XnfmpKdg=");
		category3.setTitle("OFERTA");
		categoryRepository.save(category3);*/

		ModCategory category4 = new ModCategory();
		category4.setLink("PROBLEMS");
		category4.setImg("https://www.incimages.com/uploaded_files/image/1920x1080/getty_494278234_175211.jpg");
		category4.setTitle("TWÓJ PROBLEM");
		categoryRepository.save(category4);

		ModCategory category5 = new ModCategory();
		category5.setLink("Bon");
		category5.setImg("https://weddingdream.b-cdn.net/wp-content/uploads/2020/07/Projekt-bez-tytulu-2-1024x683.jpg");
		category5.setTitle("BON PODARUNKOWY");
		categoryRepository.save(category5);

		ModCategory category6 = new ModCategory();
		category6.setLink("Gallery");
		category6.setImg("https://media.istockphoto.com/photos/girl-with-the-nail-in-hand-on-white-background-picture-id898398096?k=20&m=898398096&s=612x612&w=0&h=oyGe7JZq0tb0Jtyb2TaB3an0Cuxmt399CpC2VZ5tCdE=");
		category6.setTitle("GALERIA");
		categoryRepository.save(category6);


		ModPrice price1 = new ModPrice();
		price1.setName("Manicure klasyczny");
		price1.setCena("55");
		price1.setWaluta("zł");
		price1.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/1.jpg");
		priceRepository.save(price1);

		ModPrice price2 = new ModPrice();
		price2.setName("Manicure japoński");
		price2.setCena("80");
		price2.setWaluta("zł");
		price2.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/2.jpg");
		priceRepository.save(price2);

		ModPrice price3 = new ModPrice();
		price3.setName("Manicure hybrydowy");
		price3.setCena("100");
		price3.setWaluta("zł");
		price3.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/3.jpg");
		priceRepository.save(price3);

		ModPrice price4 = new ModPrice();
		price4.setName("Manicure żelowy");
		price4.setCena("130");
		price4.setWaluta("zł");
		price4.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/4.jpg");
		priceRepository.save(price4);

		ModPrice price5 = new ModPrice();
		price5.setName("Parafinowanie dłoni");
		price5.setCena("30");
		price5.setWaluta("zł");
		price5.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/5.jpg");
		priceRepository.save(price5);

		ModPrice price6 = new ModPrice();
		price6.setName("Masaż dłoni na peelingu");
		price6.setCena("20");
		price6.setWaluta("zł");
		price6.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/6.jpg");
		priceRepository.save(price6);

		ModPrice price7 = new ModPrice();
		price7.setName("Regeneracja dłoni");
		price7.setCena("60");
		price7.setWaluta("zł");
		price7.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/7.jpg");
		priceRepository.save(price7);

		ModPrice price8 = new ModPrice();
		price8.setName("Usunięcie stylizacji");
		price8.setCena("30");
		price8.setWaluta("zł");
		price8.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/8.jpg");
		priceRepository.save(price8);

		ModPrice price9 = new ModPrice();
		price9.setName("Geometria i regulacja brwi");
		price9.setCena("40");
		price9.setWaluta("zł");
		price9.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/9.jpg");
		priceRepository.save(price9);

		ModPrice price10 = new ModPrice();
		price10.setName("Geometria, regulacja i farbka brwi");
		price10.setCena("80");
		price10.setWaluta("zł");
		price10.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/10.jpg");
		priceRepository.save(price10);

		ModPrice price11 = new ModPrice();
		price11.setName("Laminacja, geometria, regulacja i farbka brwi");
		price11.setCena("120");
		price11.setWaluta("zł");
		price11.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/11.jpg");
		priceRepository.save(price11);

		ModPrice price12 = new ModPrice();
		price12.setName("Przedłużenie pojedynczego paznokcia bazą budującą/żelem");
		price12.setCena("10");
		price12.setWaluta("zł");
		price12.setImg("https://raw.githubusercontent.com/ppulut/Inzynierka/master/zdj%C4%99cia-cennik/12.jpg");
		priceRepository.save(price12);


		ModService service1 = new ModService();
		service1.setTitle("Manicure klasyczny");
		service1.setOpis("Zabieg polegający na nadaniu pożądanego kształtu paznokciom, następnie odsunięciu i podniesieniu skórek frezem, a następnie usunięciu ich.");
		service1.setOpis2("W dalszej części zabiegu następuje pomalowanie paznokci lakierem klasycznym lub odżywką. Zabieg wykańczany jest peelingiem dłoni z nałożeniem odżywczego masła.");
		serviceRepository.save(service1);

		ModService service2 = new ModService();
		service2.setTitle("Manicure japoński");
		service2.setOpis("Zabieg w całości składający się z naturalnych składników - pasty wcierane w płytkę paznokcia; zawierają między innymi: keratynę, pyłek pszczeli oraz witaminę A i E.");
		service2.setOpis2("Zabieg jest nieinwazyjny - nie używamy ostrych narzędzi.");
		serviceRepository.save(service2);


		ModService service3 = new ModService();
		service3.setTitle("Manicure hybrydowy");
		service3.setOpis("Zabieg polegający na aplikacji na naturalną płytkę paznokcia lakieru hybrydowego, utwardzonego w lampie UV/LED.");
		service3.setOpis2("");
		serviceRepository.save(service3);


		ModService service4 = new ModService();
		service4.setTitle("Manicure żelowy");
		service4.setOpis("Zabieg polegający na aplikacji żelu na naturalną płytkę paznokcia, bądź uzupełnieniu stylizacji żelowej, a następnie aplikacji koloru hybrydowego.");
		serviceRepository.save(service4);

		ModService service5 = new ModService();
		service5.setTitle("Parafinowanie dłoni");
		service5.setOpis("Zabieg pielęgnacyjny, polegający na zastosowaniu ciepłej parafiny na dłonie i paznokcie. Zabieg poprzedzony jest peelingiem dłoni.");
		serviceRepository.save(service5);

		ModService service6 = new ModService();
		service6.setTitle("Masaż dłoni na peelingu");
		service6.setOpis("Zabieg relaksacyjny na dłonie.");
		serviceRepository.save(service6);

		ModService service7 = new ModService();
		service7.setTitle("Regeneracja dłoni");
		service7.setOpis("Zabieg regenerujący, polegający na wykonaniu masażu dłoni na peelingu, parafinowaniu dłoni oraz nałożeniu odżywczego masła na dłonie.");
		serviceRepository.save(service7);

		ModService service8 = new ModService();
		service8.setTitle("Usunięcie stylizacji");
		service8.setOpis("Zabieg polegający na usunięciu starej stylizacji.");
		serviceRepository.save(service8);

		ModService service9 = new ModService();
		service9.setTitle("Geometria i regulacja brwi");
		service9.setOpis("Zabieg polegający na wykonaniu architektury brwi tj. geometrii brwi oraz regulacji.");
		serviceRepository.save(service9);

		ModService service10 = new ModService();
		service10.setTitle("Geometria, regulacja i farbka brwi");
		service10.setOpis("Zabieg polegający na wykonaniu architektury brwi tj. geometrii brwi oraz regulacji. W dalszej części zabiegu wykonywana jest koloryzacja brwi farbką");
		serviceRepository.save(service10);

		ModService service11 = new ModService();
		service11.setTitle("Laminacja, geometria, regulacja i farbka brwi");
		service11.setOpis("Zabieg polega na wykoniu laminacji brwi, następnie wykonywana jest geometria, regulacja oraz koloryzacja brwi farbką.");
		serviceRepository.save(service11);

		ModService service12 = new ModService();
		service12.setTitle("Przedłużenie pojedynczego paznokcia bazą budującą/żelem");
		service12.setOpis("Zabieg polegający na przedłużeniu paznokcia bazą lub żelem na szablonie, bądź tipsie tunelowym");
		serviceRepository.save(service12);

		ModReservation reservation1 = new ModReservation();
		reservation1.setTitle("Manicure hybrydowy");
		reservation1.setStartDate("2022, 11, 5, 11, 30");
		reservation1.setEndDate("2022, 11, 5, 12, 30");
		reservation.save(reservation1);


		ModProblems problems1 = new ModProblems();
		problems1.setTitle("Sucha skóra");
		problems1.setOpis("awfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e5t e5 5etgrgtedgrgreg");
		problemsRepository.save(problems1);

		ModProblems problems2 = new ModProblems();
		problems2.setTitle("Tłusta skóra");
		problems2.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 esefwefwfsefseferfsef");
		problemsRepository.save(problems2);

		ModProblems problems3 = new ModProblems();
		problems3.setTitle("Zmarszczki");
		problems3.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems3);

		ModProblems problems4 = new ModProblems();
		problems4.setTitle("Cienie pod oczami");
		problems4.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems4);

		ModProblems problems5 = new ModProblems();
		problems5.setTitle("Cienie pod oczami");
		problems5.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems5);

		ModProblems problems6 = new ModProblems();
		problems6.setTitle("Cienie pod oczami");
		problems6.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems6);

		ModProblems problems7 = new ModProblems();
		problems7.setTitle("Cienie pod oczami");
		problems7.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems7);

		ModProblems problems8 = new ModProblems();
		problems8.setTitle("Cienie pod oczami");
		problems8.setOpis("wfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 ewfaegfesgfsfewgrwegtee55etgersgrsgrsegregergedrtg5 e");
		problemsRepository.save(problems8);

	}
}