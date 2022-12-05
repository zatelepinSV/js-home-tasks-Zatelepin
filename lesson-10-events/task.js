'use strict';

(function () {
  var obj = [
    {label: 'Разработчики:', type: 'text', name: 'devs'},
    {label: 'Название сайта:', type: 'text', name: 'siteName'},
    {label: 'URL сайта:', type: 'text', name: 'url'},
    {label: 'Дата запуска:', type: 'text', name: 'startDate'},
    {label: 'Посетителей в сутки:', type: 'text', name: 'peoplesInDay'},
    {label: 'E-mail для связи:', type: 'text', name: 'email'},
    {
      label: 'Рубрика каталога:', type: 'select', name: 'catalog',
      selection: ['здоровье', 'домашний уют', 'бытовая техника']
    },
    {
      label: 'Размещение:', type: 'radio', name: 'accommodation',
      selection: ['бесплатное', 'платное', 'VIP']
    },
    {label: 'Разрешить отзывы:', type: 'checkbox', name: 'reviewsPermission'},
    {label: 'Описание сайта:', type: 'textarea', name: 'siteDescription'},
    {label: 'Опубликовать', type: 'submit', name: 'publish'},
  ];

  var origForm = document.getElementById('origin');
  var contBody = document.body;

  create(contBody, origForm, obj);

  function create(container, origForm, obj) {
    var cloneForm = origForm.cloneNode(false);
    creatorForms(obj);

    function creatorForms(input) {
      for (var k = 0; k < input.length; k++) {
        var elements = input[k];
        var id = k + 1;
        switch (elements.type) {
          case 'text':
            cloneForm.appendChild(formTypeText(elements, id));
            break;
          case 'select':
            cloneForm.appendChild(formTypeSelect(elements, id));
            break;
          case 'radio':
            cloneForm.appendChild(formTypeRadio(elements, id));
            break;
          case 'checkbox':
            cloneForm.appendChild(formCheckbox(elements, id));
            break;
          case 'textarea':
            cloneForm.appendChild(formTextarea(elements, id))
            break;
          case 'submit':
            cloneForm.appendChild(formButton(elements, id));
            break;
        }
      }
    }
    container.appendChild(cloneForm);
  }

  function formTypeText(obj, id) {
    var lblName = obj.label;
    var type = obj.type;
    var name = obj.name;
    var forms = document.createElement('div');

    forms.appendChild(createLabel(lblName, id));
    forms.appendChild(createInput(type, name, id));
    return forms;
  }

  function formTypeSelect(obj, id) {
    var lblName = obj.label;
    var name = obj.name;
    var select = obj.selection;
    var forms = document.createElement('div');
    forms.appendChild(createLabel(lblName, id));
    forms.appendChild(createInputOptions(name, id, select)).value = select[2];

    function createInputOptions(name, id, select) {
      var selectFrm = document.createElement('select');
      for (var k = 0; k < select.length; k++) {
        var optn = document.createElement('option');
        optn.innerText = select[k];
        selectFrm.appendChild(optn);
      }
      selectFrm.name = name;
      selectFrm.id = id;
      return selectFrm;
    }

    return forms;
  }

  function formTypeRadio(obj, id) {
    var lblName = obj.label;
    var type = obj.type;
    var name = obj.name;
    var selection = obj.selection;
    var forms = document.createElement('div');
    forms.appendChild(createLabel(lblName, id));

    for (var k = 0; k < selection.length; k++) {
      forms.appendChild(createInput(type, name, name + k));
      forms.appendChild(document.createTextNode(selection[k]));
    }
    return forms;
  }

  function formCheckbox(obj, id) {
    var lblName = obj.label;
    var type = obj.type;
    var name = obj.name;
    var forms = document.createElement('div');
    forms.appendChild(createLabel(lblName, id));
    forms.appendChild(createInput(type, name, id)).checked = true;
    return forms;
  }

  function formTextarea(obj, id) {
    var lblName = obj.label;
    var name = obj.name;
    var forms = document.createElement('div');
    forms.appendChild(createLabel(lblName, id));
    forms.appendChild(createInputTxt(name, id)).setAttribute(
      'style', 'display: block; height: 200px; width: 300px');
    function createInputTxt(name, id) {
      var inputFrm = document.createElement("textarea");
      inputFrm.name = name;
      inputFrm.id = id;
      return inputFrm;
    }
    return forms;
  }

  function formButton(obj, id) {
    var value = obj.label;
    var type = obj.type;
    var name = obj.name;
    var forms = document.createElement('div');
    forms.appendChild(createInputButton(type, name, id, value));

    function createInputButton(type, name, idd, value) {
      var inputFrm = document.createElement('input');
      inputFrm.type = type;
      inputFrm.name = name;
      inputFrm.id = id;
      inputFrm.value = value;
      return inputFrm;
    }

    return forms;
  }

  function createLabel(lblName, id) {
    var label = document.createElement('label');
    label.for = id;
    label.innerText = lblName;
    return label;
  }

  function createInput(type, name, id) {
    var inputFrm = document.createElement('input');
    inputFrm.type = type;
    inputFrm.name = name;
    inputFrm.id = id;
    return inputFrm;
  }
})();