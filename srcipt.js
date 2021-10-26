document.addEventListener('DOMContentLoaded', () => {

    let people = {
        1: {
            birthday: '1997-07-26',
            name:'Лавров Владимир Владимирович:'
        },
        2: {
            birthday: '1997-10-09',
            name:'Лаврова Анастасия Юрьевна'
        },
        3: {
            birthday: '1945-01-05',
            name:'Лаврова Лариса Георгиевна'
        },
        4: {
            birthday: '1970-04-17',
            name:'Бовсуновский Юрий Васильевич:'
        },
        5: {
            birthday: '1972-06-24',
            name:'Бовсуновская Оксана Геннадиевна'
        },
        6: {
            birthday: '1939-01-07',
            name:'Бовсуновский Василий Степанович'
        },
        7: {
            birthday: '1953-10-04',
            name:'Соловьева Надежда Федоровна'
        },
        8: {
            birthday: '2004-12-29',
            name:'Чумак Георгий Олегович'
        },
        7: {
            birthday: '2009-02-18',
            name:'Чумак Арсений Олегович'
        },
        8: {
            birthday: '1980-03-26',
            name:'Чумак Евгения Геннадиевна'
        },
        9: {
            birthday: '1979-03-01',
            name:'Чумак Олег Васильевич'
        },
        10: {
            birthday: '1992-03-07',
            name:'Береза Игорь Юрьевич'
        },
        11: {
            birthday: '1995-01-15',
            name:'Береза Ирина Юрьевна'
        },
        12: {
            birthday: '2020-09-31',
            name:'Береза Матвей Игоревич'
        },
        13: {
            birthday: '2019-04-09',
            name:'Береза Александра Игоревна'
        },
        14: {
            birthday: '2011-06-30',
            name:'Артеменко Полина Дмитриевна'
        },
        15: {
            birthday: '1965-09-27',
            name:'Артеменко Дмитрий Николаевич'
        },
        16: {
            birthday: '1980-02-09',
            name:'Артеменко Марина Анатольевна'
        },
        17: {
            birthday: '1976-01-22',
            name:'Березина Ирина Анатольевна'
        },
        18: {
            birthday: '1954-06-28',
            name:'Березин Анатолий Николаевич'
        },
        19: {
            birthday: '1953-03-15',
            name:'Белименко Вера Федоровна'
        },
        20: {
            birthday: '1952-10-21',
            name:'Белименко Григорий Григорьевич'
        }
        
       /*
        Касперкий Маша 4 мая 2010
        Лиза 25 сентября 2011
        Дима 5 сентября 2013
        1991 НАташа 2 мая

        */
    };

    let heading = document.querySelector('.heading');
    let info = document.querySelector('.info');

 

    setInterval(() => {
      info.innerHTML = ""; 
        let countBovsun = 0;
        let countSolov = 0;
        let countLavrov = 0;
        let countBerez = 0;
        let countBerezin = 0;
        let countArtemenrko = 0;
        let countBelim = 0;
        let countChum = 0;

        for(let key in people) {   
            
            if(people[key].name.indexOf('Лавр') != -1 && countLavrov < 1) {
                info.innerHTML += '<h2> Лавровы: <h2>'; 
                countLavrov++;
            }
            if(people[key].name.indexOf('Соловьев') != -1 && countSolov < 1) {
                info.innerHTML += '<h2> Соловьевы: <h2>'; 
                countSolov++;
            }
            if(people[key].name.indexOf('Бовсуновск') != -1 && countBovsun < 1) {
                info.innerHTML += '<h2> Бовсуновские: <h2>'; 
                countBovsun++;
            }
            if(people[key].name.indexOf('Береза') != -1 && countBerez < 1) {
                info.innerHTML += '<h2> Березы: <h2>'; 
                countBerez++;
            }
            if(people[key].name.indexOf('Березин') != -1 && countBerezin < 1) {
                info.innerHTML += '<h2> Березины: <h2>'; 
                countBerezin++;
            }
            if(people[key].name.indexOf('Чумак') != -1 && countChum < 1) {
                info.innerHTML += '<h2> Чумаки: <h2>'; 
                countChum++;
            }
            if(people[key].name.indexOf('Артеменко') != -1 && countArtemenrko < 1) {
                info.innerHTML += '<h2> Артеменки: <h2>'; 
                countArtemenrko++;
            }
            if(people[key].name.indexOf('Белименко') != -1 && countBelim < 1) {
                info.innerHTML += '<h2> Белименки: <h2>'; 
                countBelim++;
            }
            
            
            let birthday = new Date(people[key].birthday);
            let dataRed = people[key].birthday.split('-');
            let date = new Date();

            
            let age = Math.floor((date.getTime() - birthday.getTime()) / 1000 / 60 / 60 / 24 / 365);
            birthday.setFullYear(date.getFullYear() + 1);
            
            let countSeconds = Math.floor((birthday.getTime() - date.getTime()) / 1000);
            let countDays = Math.floor(countSeconds / 60 / 60 / 24);
            let countHours = Math.floor((countSeconds - (countDays * 60 * 60 * 24)) / 60 / 60);
            let countMinutes = Math.floor((countSeconds - (countDays * 60 * 60 * 24) - countHours * 60 * 60) / 60);
            let countSecondss = Math.floor(countSeconds - (countDays * 60 * 60 * 24) - (countHours * 60 * 60) - (countMinutes * 60));

            info.innerHTML += `
                <div class="s">
                ${key}.
                ${people[key].name} 
                <strong> (Дата рождения: ${people[key].birthday.split('-').reverse().join(".")}. Возраст: ${age} </strong> ) <br> До дня рождения осталось:
                (
                ${countDays} дней  
                ${countHours} часов 
                ${countMinutes} минут 
                ${countSecondss} секунд
                )
                </div>
            `;

            if((date.getMonth() + 1) == dataRed[1] && date.getDate < dataRed[2]) {
                info.style.color = 'red';
             }
        }

    }, 1000);
  
});
