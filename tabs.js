// tab content
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabPanes.forEach(pane => {
                if (pane.id === targetId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });
});
// FEEDBACK
const rating = document.querySelector('.rating');
const child = document.querySelectorAll('.child');
const feedback_section = document.querySelector('.feedback-section1');
const btn = document.querySelector('#btn');
let icon;

rating.addEventListener('click', (event) => {
    icon = event.target.closest('.child');

    if (icon) {
        child.forEach(c => c.classList.remove('active'));
        icon.classList.add('active');
    }
});

btn.addEventListener('click', () => {
    let user_feedback;
    let user_feedback_icon;

    if (icon) {
        user_feedback = icon.children[1].innerText;
        user_feedback_icon = icon.children[0].innerText;
    } else {
        user_feedback = "";
    }

    if (user_feedback !== "") {
        feedback_section.innerHTML = `
            <div class="response-screen">
                <p>${user_feedback_icon}</p>
                <h3>Your Feedback: ${user_feedback}</h3>
                <p>💖 Thank You for your response</p>
                <div class="feedback-button">
                    <a href="index.html">Back</a>
                </div>
            </div>
        `;
    }
});
