import {closeModal,openModal} from './modal';
import { postData } from '../services/services';
function forms(formSelector, modalTimerId){
    //forms

    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/form/spinner.svg",
        success: "Дякуємо!Скоро ми Вам зателефонуємо",
        failure: "Щось пішло не так..."
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display:block;
            margin:0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            //или  form.append(statusMessage); 
            /* const request = new XMLHttpRequest();
            request.open('POST', 'server.php'); */
            /*request.setRequestHeader('Content-type', 'multipart/form-data');*/            
            /* request.setRequestHeader('Content-type', 'application/json'); */
            const formData = new FormData(form);
            const json=JSON.stringify(Object.fromEntries(formData.entries()));
            /* const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            }); */
            /* const json = JSON.stringify(object); */
            /* request.send(json); */
            /* request.send(formData); */
           /*  fetch('server.php',{
                method:"POST",
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(object)
            }) */
            /* postData('server.php',JSON.stringify(object)) */
            /* postData('http://localhost:3000/requests',JSON.stringify(object)) */
            postData('http://localhost:3000/requests',json)
            /* .then(data=>data.text()) */
            .then(data=>{
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
            }).catch(()=>{
                showThanksModal(message.failure);
            }).finally(()=>{
                form.reset();
            })
            /* request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
            }); */
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal',modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
    <div class="modal__content>
    <div class="modal__close" data-close>×</div>
    <div  class="modal__title">${message}</div>
    </div>`;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);

    }
}

export default  forms;