// notatnik z zajęć
const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')
const btnPrzelicz = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

btnPrzelicz.addEventListener('click', () => {

    const sum = Number(liczba1.value) + Number(liczba2.value) + Number(liczba3.value) + Number(liczba4.value);



    const suma = Number(sum);

    const min = Math.min(liczba1.value, liczba2.value, liczba3.value, liczba4.value);

    const max = Math.max(liczba1.value, liczba2.value, liczba3.value, liczba4.value);

    document.getElementById("wyswietlSuma").innerHTML = suma;
    document.getElementById("wyswietlMax").innerHTML= max;
    document.getElementById("wyswietlMin").innerHTML = min;
})
