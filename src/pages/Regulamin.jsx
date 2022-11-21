import React, {useEffect } from 'react'
import '../Gallery.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import styled from "styled-components"

const Main = styled.div`
width: 100%;
height: 100%;
`;

const Container = styled.div`
width: 80%;
position: static;
margin-bottom: 1.5em;
margin-left: 10.0em;
`;

const Naglowek = styled.h4`
text-align: center;
display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #333;
    font-size: 30px;
    font-weight: 1000;
    text-transform: capitalize;
    line-height: 1.3em;
    padding:5px;
    margin-bottom:5px;
`;


const Opis = styled.p`
text-align: left;
margin-bottom: 1.5em;
margin: 0 0 20px;
`;


const Regulamin = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


    return (
       <Main>
    
            <Navbar/>
            <Container>
<h1>Regulamin salonu</h1>

<Naglowek>§ 1 <br></br>Postanowienia Wstępne</Naglowek>

<Opis>1. Niniejszy Regulamin skierowany jest do Konsumentów i określa zasady korzystania ze Gabinetu kosmetycznego oraz zasady i tryb zawierania Umów z Klientem na odległość za pośrednictwem Strony Gabinetu.</Opis>
        
<Naglowek>§ 2 <br></br>Definicje</Naglowek>
<Opis>1. Konsument – osoba fizyczna zawierająca ze Sprzedawcą umowę w ramach Gabinetu, której przedmiot nie jest związany bezpośrednio z jej działalnością gospodarczą lub zawodową.<br></br>
2. Klient – każdy podmiot dokonujący rezerwacji za pośrednictwem Strony Gabinetu.<br></br>
3. Umowa zawarta na odległość – umowa zawarta z Klientem w ramach zorganizowanego systemu zawierania umów na odległość, bez jednoczesnej fizycznej obecności stron, z wyłącznym wykorzystaniem jednego lub większej liczby środków porozumiewania się na odległość do chwili zawarcia umowy włącznie.<br></br>
4. Regulamin – niniejszy regulamin Sklepu.<br></br>
5. Formularz rezerwacji terminu – interaktywny formularz dostępny na Stronie Gabinetu umożliwiający złożenie rezerwacji, w szczególności poprzez dodanie daty oraz nazwy usługi.</Opis>


<Naglowek>§ 3 <br></br>Kontakt Z Gabinetem</Naglowek>
<Opis>1. Adres e-mail Usługodawcy: nailstest1233@gmail.com <br></br>
2. Numer telefonu Sprzedawcy: 69 2137 420 <br></br>
3. Formularz kontaktowy dostępny na Stronie Gabinetu <br></br>
4. Klient może porozumiewać się z Usługodawcą za pomocą adresów i numerów telefonów podanych w niniejszym paragrafie. <br></br>
5. Klient może porozumieć się telefonicznie ze Sprzedawcą w godzinach: 9:00-20:00</Opis>

<Naglowek>§ 4 <br></br>Wymagania Techniczne</Naglowek>
<Opis>1. Urządzenie końcowe z dostępem do sieci Internet i przeglądarką internetową<br></br>
2. Aktywne konto poczty elektronicznej</Opis>

<Naglowek>§ 5 <br></br>Informacje Ogólne</Naglowek>
<Opis>1. Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie ponosi odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu Strony Gabinetu spowodowane siłą wyższą, niedozwolonym działaniem osób trzecich lub niekompatybilnością Strony Gabinetu z infrastrukturą techniczną Klienta.<br></br>
2. Przeglądanie asortymentu usług nie wymaga zakładania Konta. Składanie rezerwacji terminu przez Klienta na Usługi znajdujące się w asortymencie Gabinetu możliwe jest  po założeniu Karty Klienta, którą można założyć w Salonie podczas pierszej wizyty lub po kontakcie telefonicznym w przypadku pierwszej wizyty. <br></br>
3. Ceny są podane w polskich złotych i są cenami brutto (uwzględniają podatek VAT).</Opis>


<Naglowek>§ 6 <br></br>Zasady składania rezerwacji</Naglowek>

<Opis>W celu złożenia Rezerwacji należy:<br></br>
1. Wybrać Usługę będącą przedmiotem Rezerwacji, a następnie kliknąć przycisk „Wybierz” (lub równoznaczny);<br></br>
2. Wpisać swój numer karty klienta lub skorzystać z możliwości złożenia Pierwszej Rezerwacji dla nieposiadających karty stałego klienta<br></br>
3. Jeżeli wybrano możliwość złożenia Pierwszej Rezerwacji – wypełnić Formularz poprzez wpisanie danych Klienta <br></br>
4. kliknąć przycisk “Wyślij”
</Opis>
             
<Naglowek>§ 7 <br></br>Prawo Odstąpienia Od Umowy - ze strony Klienta</Naglowek>
<Opis>1. Klient może zrezygnować z zarezerwowanego terminu, informując Gabinet z minimum godzinnym (1 godzina) wyprzedzeniem.<br></br>
</Opis>

<Naglowek>§ 8 <br></br>Prawo Odstąpienia Od Umowy i Odmowa Zgody na Wykonanie Usługi - ze strony Sprzedawcy</Naglowek>
<Opis>1. Jeżeli klient prowadzi nieuczciwe praktyki, współpracując z inną konkurencyjną firmą i celowo dokonuje rezerwacji terminu, na którym nie będzie obecny, to Sprzedawca ma prawo permamentnie usunąć go z listy Klientów posiadających Kartę Stałego Klienta (co uniemożliwi mu składanie kolejnych Rezerwacji), a także wyciągnąć wobec niego konsewkencje prawne </Opis>

<Naglowek>§ 9 <br></br>Dane Osobowe W Sklepie Internetowym</Naglowek>

<Opis>1. Administratorem danych osobowych Klientów zbieranych za pośrednictwem Strony Gabinetu jest Sprzedawca.<br></br>
2. Dane osobowe Klientów zbierane przez administratora za pośrednictwem Strony Gabinetu zbierane są w celu realizacji Umowy Sprzedaży/Rezerwacji, a jeżeli Klient wyrazi na to zgodę – także w celu marketingowym.<br></br>
3. Klient ma prawo dostępu do treści swoich danych oraz ich poprawiania.<br></br>
4. Podanie danych osobowych jest dobrowolne, aczkolwiek niepodanie wskazanych w Regulaminie danych osobowych niezbędnych do zawarcia Umowy Sprzedaży/Rezerwacji skutkuje brakiem możliwości zawarcia tejże umowy.<br></br>
</Opis>


<Naglowek>§ 10 <br></br>Postanowienia Końcowe</Naglowek>

<Opis>1. Umowy zawierane poprzez Sklep internetowy zawierane są w języku polskim.<br></br>
2. Sprzedawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych przyczyn to jest: zmiany przepisów prawa. O każdej zmianie Sprzedawca poinformuje Klienta z co najmniej 7 dniowym wyprzedzeniem.<br></br>
3. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczególności: Kodeksu cywilnego; ustawy o świadczeniu usług drogą elektroniczną; ustawy o prawach konsumenta, ustawy o ochronie danych osobowych.
</Opis>
        
            </Container>
            <Footer/>
            
            </Main>
    )
      }

export default Regulamin