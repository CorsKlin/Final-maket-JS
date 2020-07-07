const employeers = [
    {
        dept_unit_id: 0,
        id: 0,
        name: "YarikHead",
        tel: "123-123-3", 
        salary: 3000
    },
    {
        id: 1,
        name: "MashaLead",
        dept_unit_id: 1,
        tel: "123-123-3", 
        salary: 2000
    },
    {
        id: 2,
        name: "SashaLead",
        dept_unit_id: 1,
        tel: "123-123-3", 
        salary: 2200
    },
    {
        id: 3,
        name: "MirraDev",
        dept_unit_id: 2,
        tel: "123-123-3",
        salary: 1200
    },
    {
        id: 4,
        name: "IraDev",
        dept_unit_id: 2,
        tel: "123-123-3",
        salary: 1000
    },
    {
        id: 5,
        name: "DanikHead3",
        dept_unit_id: 3,
        tel: "123-123-33",
        salary: 3000
    },
    {
        id: 7,
        name: "KoliaLead",
        dept_unit_id: 4,
        tel: "123-123-3",
        salary: 2000
    },
    {
        id: 6,
        name: "OliaLead3",
        dept_unit_id: 4,
        tel: "123-123-3",
        salary: 2200
    },
    {
        id: 9,
        name: "SienaTest",
        dept_unit_id: 5,
        tel: "123-123-3",
        salary: 1000
    },
{
        id: 8,
        name: "LenaTest",
        dept_unit_id: 5,
        tel: "123-123-3",
        salary: 1200
    }
];

const dept = [
    devDeptHead = {
        name: 'Development Management',
        id: '0',
        dept_units: null,
        all_stuff: []
    },
    devLead = {
        name: 'Lead Developers',
        id: '1',
        dept_units: '0',
        all_stuff: []
    },
    developer = {
        name: 'Developers',
        id: '2',
        dept_units: '1',
        all_stuff: []
    },
    qaDeptHead = {
        name: 'Quality Assurance Management',
        id: '3',
        dept_units: null,
        all_stuff: []
    },
    qaLead = {
        name: 'Lead QA',
        id: '4',
        dept_units: '3',
        all_stuff: []
    },
    qaTester = {
        name: 'Testers',
        id: '5',
        dept_units: '4',
        all_stuff: []
    },
];

//===CREATE_CONST=================================================================================================================

const left_0 = document.createElement("div");        
left_0.id = "left_0";
const left_1 = document.createElement("div");
left_1.id = "left";

const select = document.createElement("select");
select.id = "choose_Dep";
const option_0 = document.createElement("option");
option_0.innerText = "Select  Department";
const option_1 = document.createElement("option");
option_1.innerText = "Development Managament";
const option_2 = document.createElement("option");
option_2.innerText = "Quality Assurance Managament";



const center = document.createElement("div");
center.id = "center";
const div_1 = document.createElement("div");
const div_2 = document.createElement("div");

const button = document.createElement("button");
button.id = "clear";
button.innerText = "CLEAR FILE";

const select_2day = document.createElement("select");
select_2day.id = "sel_2day";

const option_2day = document.createElement("option");
option_2day.innerText = "BYN";
option_2day.setAttribute("value", 0);



const right = document.createElement("div");
right.id = "right";

const table = document.createElement("table");
table.id = "table_main";
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const td_1 = document.createElement("td");
td_1.innerText = "ID";
const td_2 = document.createElement("td");
td_2.innerText = "NAME";
const td_3 = document.createElement("td");
td_3.innerText = "DEPT - UNIT - ID";
const td_4 = document.createElement("td");
td_4.innerText = "Tel";
const td_5 = document.createElement("td");
td_5.innerText = "Salary";

//=CREATE_CONST================================================================================================================

//=APPEND=======================================================================================================================

tr.append(td_1);
tr.append(td_2);
tr.append(td_3);
tr.append(td_4);
tr.append(td_5);

thead.append(tr);
table.append(thead);
right.append(table);

div_2.append(button);

select_2day.append(option_2day);
div_1.append(select_2day);

center.append(div_1);
center.append(div_2);

select.append(option_0);
select.append(option_1);
select.append(option_2);

left_1.append(select);
left_0.append(left_1);
left_0.append(center);

document.body.appendChild(left_0);
document.body.appendChild(right);

//=APPEND==========================================================================================================================

//=================================================================================================================================
const curr_IDs = [145, 292, 298]; //индексы для сайта НБРБ 
const currencies_Cache = {};

let curr_Rate = "1";
let curr_Scale = "1";
let perem = [];

let blocked_Button = document.getElementById('sel_2day');
blocked_Button.setAttribute("disabled", "disabled");
const left = document.getElementById('left');

//=================================================================================================================================

//=Стройка дерева===================================================================================================================

function build_Tree(items, dept_units) {
    dept_units = dept_units || null;
    let result = [];

    items.forEach((item) => {
        if (item.dept_units === dept_units) {
            result.push(item);
            item.children = build_Tree(items, item.id);

            if (!item.children.length) {
                delete item.children;
            }
        }
    }

    );
    return result;


};
const items_Tree = build_Tree(dept);

//=Стройка дерева==================================================================================================================

build_DOM_Tree (items_Tree,left);

function build_DOM_Tree( items, suppEl){
    const ulEl = document.createElement ("ul");
    create_HTML_Tree(items, ulEl);
    suppEl.appendChild(ulEl);

};

function create_HTML_Tree(items, rootEl) {
    items.forEach(item => {
        const liEL = document.createElement('li');
        liEL.setAttribute('data-sign', item.name);
        liEL.setAttribute('id', 'li' + item.id);
        liEL.setAttribute('class', 'displayNone');
        liEL.innerHTML = `<span class="chevron chevron-right" data-sign="span${item.name}" id="span${item.id}"></span>&#8194;${item.name}`;
        rootEl.appendChild(liEL);
        

        if(item.children) {
            const childrenUl = document.createElement('ul');
            liEL.appendChild(childrenUl);
            create_HTML_Tree(item.children, childrenUl);
        }
    });
}

//=Стройка дерева===================================================================================================================================

init (); //вызов f-init

async function init () {
    const curr_Promises = curr_IDs.map (curr_ID => fetch_Curr(curr_ID));
    const currencies = await Promise.all(curr_Promises);

    currencies.forEach(currency => {
        currencies_Cache[currency.curr_ID] = currency;
    });

    createCurrOptions(currencies);

    document.getElementById("sel_2day").addEventListener("change", async () => {
        let selectEl = document.getElementById("sel_2day");
        const selectedcurr_ID = selectEl.value;

        if (selectedcurr_ID != "0") {
            fetchedCurrRate = await getCurrRate (selectedcurr_ID);
            curr_Rate = fetchedCurrRate.Cur_OfficialRate;
            curr_Scale = fetchedCurrRate.Cur_Scale;
        }
        else {
            curr_Rate = "1";
            curr_Scale = "1";
        }
        buildTable();//Вызов простройки таблицы
    });
        
};

//=Подключение к НБРБ========================================================================================================================================
async function fetch_Curr(id) {
    const url = id
    ? "https://www.nbrb.by/api/exrates/currencies/" + id
    : "https://www.nbrb.by/api/exrates/currencies";

    const result = await fetch(url);
    const fetchedData = await result.json();

    return fetchedData;
};

function createCurrOptions(currencies) {
    currencies.forEach(currency => {
        const optionEl = document.createElement('option');
        optionEl.value = currency.Cur_ID;
        optionEl.innerText = currency.Cur_Abbreviation;

        document.getElementById("sel_2day").appendChild(optionEl);
    });
};

const currCache = {};
async function getCurrRate(curr_ID) {
    if(!currCache[curr_ID]) {
        currCache[curr_ID] = fetch(`https://www.nbrb.by/api/exrates/rates/${curr_ID}`).then(data => data.json())
    }
    return currCache[curr_ID];
};

//=Подключение к НБРБ=============================================================================================================================================

//================================================================================================================================================================

li0.classList.add("displayNone");
li3.classList.add("displayNone");

//================================================================================================================================================================

//==Полключение к displayNone===============================================================================================================================================

document.getElementById('choose_Dep').addEventListener('change', function (ev) {
    if (ev.target.selectedIndex === 0) {
        clearButton();
        document.getElementById('li0').classList.remove('displayInline');
        document.getElementById('li0').classList.add('displayNone');
        document.getElementById('li3').classList.remove('displayInline');
        document.getElementById('li3').classList.add('displayNone');
    }
    if (ev.target.selectedIndex === 1) {
        document.getElementById('li0').classList.remove('displayNone');
        document.getElementById('li1').classList.remove('displayNone');
        document.getElementById('li2').classList.remove('displayNone');
        document.getElementById('li0').classList.add('displayInline');
        document.getElementById('li1').classList.add('displayInline');
        document.getElementById('li2').classList.add('displayInline');
        document.getElementById('li3').classList.remove('displayInline');
        document.getElementById('li4').classList.remove('displayInline');
        document.getElementById('li5').classList.remove('displayInline');
        document.getElementById('li3').classList.add('displayNone');
        document.getElementById('li4').classList.add('displayNone');
        document.getElementById('li5').classList.add('displayNone');
    }
    if (ev.target.selectedIndex === 2) {
        document.getElementById('li3').classList.remove('displayNone');
        document.getElementById('li4').classList.remove('displayNone');
        document.getElementById('li5').classList.remove('displayNone');
        document.getElementById('li3').classList.add('displayInline');
        document.getElementById('li4').classList.add('displayInline');
        document.getElementById('li5').classList.add('displayInline');
        document.getElementById('li0').classList.remove('displayInline');
        document.getElementById('li1').classList.remove('displayInline');
        document.getElementById('li2').classList.remove('displayInline');
        document.getElementById('li0').classList.add('displayNone');
        document.getElementById('li1').classList.add('displayNone');
        document.getElementById('li2').classList.add('displayNone');
    }
})

//==Подключение к DisplayNone=======================================================================================================================================

//==Добавление в массив сотрудников по отделам======================================================================================================================

developer.all_stuff = employeers.filter(developer => developer.dept_unit_id === 2);
devLead.all_stuff = employeers.filter(devLead => devLead.dept_unit_id === 1);
devDeptHead.all_stuff = employeers.filter(devDeptHead => devDeptHead.dept_unit_id === 0);
qaTester.all_stuff = employeers.filter(qaTester => qaTester.dept_unit_id === 5);
qaLead.all_stuff = employeers.filter(qaLead => qaLead.dept_unit_id === 4);
qaDeptHead.all_stuff = employeers.filter(qaDeptHead => qaDeptHead.dept_unit_id === 3);

//==Добавление в массив сотрудников по отделам======================================================================================================================


//==Переключатель на bold===========================================================================================================================================

left.addEventListener('click', function (ev) {
    if (ev.target.dataset.sign === 'Developers') {
     li0.classList.remove('bold');
     li1.classList.remove('bold');
     li3.classList.remove('bold');
     li4.classList.remove('bold');
     li5.classList.remove('bold');
    }
    if (ev.target.dataset.sign === 'Lead Developers') {
     li0.classList.remove('bold');
     li2.classList.remove('bold');
     li3.classList.remove('bold');
     li4.classList.remove('bold');
     li5.classList.remove('bold');
    }
    if (ev.target.dataset.sign === 'Development Management') {
     li1.classList.remove('bold');
     li2.classList.remove('bold');
     li3.classList.remove('bold');
     li4.classList.remove('bold');
     li5.classList.remove('bold');
    }
    if (ev.target.dataset.sign === 'Testers') {
     li0.classList.remove('bold');
     li1.classList.remove('bold');
     li2.classList.remove('bold');
     li3.classList.remove('bold');
     li4.classList.remove('bold');
    }
    if (ev.target.dataset.sign === 'Lead QA') {
     li0.classList.remove('bold');
     li1.classList.remove('bold');
     li2.classList.remove('bold');
     li3.classList.remove('bold');
     li5.classList.remove('bold');
    }
    if (ev.target.dataset.sign === 'Quality Assurance Management') {
     li0.classList.remove('bold');
     li1.classList.remove('bold');
     li2.classList.remove('bold');
     li4.classList.remove('bold');
     li5.classList.remove('bold');
    }
 });

//==Переключатель на bold===========================================================================================================================================


//==Галочка, аля шеврона американского==============================================================================================================================

left.addEventListener('click', function (ev) {
    if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'spanDevelopment Management') {
        ev.target.classList.toggle('chevron-right');
        ev.target.classList.toggle('chevron-bottom');
        document.getElementById('li1').classList.toggle('displayInline');
        document.getElementById('li1').classList.toggle('displayNone');
    }
    if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'spanLead Developers') {
        ev.target.classList.toggle('chevron-right');
        ev.target.classList.toggle('chevron-bottom');
        document.getElementById('li2').classList.toggle('displayInline');
        document.getElementById('li2').classList.toggle('displayNone');
    }
    if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'spanQuality Assurance Management') {
        ev.target.classList.toggle('chevron-right');
        ev.target.classList.toggle('chevron-bottom');
        document.getElementById('li4').classList.toggle('displayInline');
        document.getElementById('li4').classList.toggle('displayNone');
    }
    if (ev.target.nodeName === 'SPAN' && ev.target.dataset.sign === 'spanLead QA') {
        ev.target.classList.toggle('chevron-right');
        ev.target.classList.toggle('chevron-bottom');
        document.getElementById('li5').classList.toggle('displayInline');
        document.getElementById('li5').classList.toggle('displayNone');
    }
});

//==Галочка, аля шеврона американского==============================================================================================================================

//==Кнопка Clear===================================================================================================================================================

document.getElementById('clear').addEventListener('click', function (ev) {
    clearButton();
})
function clearButton() {
    li0.classList.remove('bold');
    li1.classList.remove('bold');
    li2.classList.remove('bold');
    li3.classList.remove('bold');
    li4.classList.remove('bold');
    li5.classList.remove('bold');
    
    document.getElementById('li2').classList.remove('displayNone');
    document.getElementById('li1').classList.remove('displayNone');
    document.getElementById('li5').classList.remove('displayNone');
    document.getElementById('li4').classList.remove('displayNone');
    document.getElementById('span0').classList.remove('chevron-bottom');
    document.getElementById('span1').classList.remove('chevron-bottom');
    document.getElementById('span3').classList.remove('chevron-bottom');
    document.getElementById('span4').classList.remove('chevron-bottom');
    
    document.getElementById('li2').classList.add('displayInline');
    document.getElementById('li1').classList.add('displayInline');
    document.getElementById('li5').classList.add('displayInline');
    document.getElementById('li4').classList.add('displayInline');
    document.getElementById('span0').classList.add('chevron-right');
    document.getElementById('span1').classList.add('chevron-right');
    document.getElementById('span3').classList.add('chevron-right');
    document.getElementById('span4').classList.add('chevron-right');
   
    select_2day.value = '0';
    document.getElementById('choose_Dep').selectedIndex = 0;
    curr_Rate = '1';
    curr_Scale = '1';
    perem = [];
    
    document.getElementById('li0').classList.remove('displayInline');
    document.getElementById('li0').classList.add('displayNone');
    document.getElementById('li3').classList.remove('displayInline');
    document.getElementById('li3').classList.add('displayNone');

    deleteTBody();// удаление ТБади
 

};

//=Проверка на выбор отдела===========================================================================================================================================

left.addEventListener('click', function (ev) {
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Developers') {
        perem = developer.all_stuff;
        ev.target.classList.add('bold');
    }
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Lead Developers') {
        perem = devLead.all_stuff;
        ev.target.classList.add('bold');
    }
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Development Management') {
        perem = devDeptHead.all_stuff;
        ev.target.classList.add('bold');
    }
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Testers') {
        perem = qaTester.all_stuff;
        ev.target.classList.add('bold');
    }
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Lead QA') {
        perem = qaLead.all_stuff;
        ev.target.classList.add('bold');
    }
    if (ev.target.nodeName === "LI" && ev.target.dataset.sign === 'Quality Assurance Management') {
        perem = qaDeptHead.all_stuff;
        ev.target.classList.add('bold');
    }  
    
    if (ev.target.nodeName === "LI") {
        buildTable();//Вызов простройки таблицы
    }
});

//=Проверка на выбор отдела========================================================================================================================================

//=Постройка таблицы===============================================================================================================================================

function buildTable () {

    deleteTBody(); //удаление ТБади перед каждым вызовом функции

    var tBody = document.createElement('tbody');
    for (let i = 0; i < perem.length; i++) {
        var trBlock = document.createElement('tr');
            for (let obj in perem[i]) {
                if (obj === 'salary') {
                    newDev = (perem[i][obj] / curr_Rate * curr_Scale);  //----------------курс валют
                    newDevCurr = newDev.toFixed(2);
                } else {
                    newDevCurr = perem[i][obj];
                }
                var tdList = document.createElement('td');
                tdList.append(newDevCurr); // вставляем данные в td
                trBlock.append(tdList); // td вставляем в tr
                tBody.append(trBlock); // tr вставляем в элемент tbody
                table_main.append(tBody); // tbody вставляем в таблицу
            };
    };
    blocked_Button.removeAttribute("disabled");
};

//=Постройка таблицы================================================================================================================================================

//=Удаление TБади=================================================================================================================================================

function deleteTBody() {
    var tBody = document.getElementsByTagName('tbody');
    for (let i = 0; tBody.length > i; i++) {
        tBody[i].remove();
    };
};