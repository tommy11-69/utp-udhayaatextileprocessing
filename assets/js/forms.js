/**
 * forms.js - Form validation and handling for Udhayaa Textile Processing
 */

document.addEventListener('DOMContentLoaded', () => {
    const rfqForm = document.getElementById('rfq-form');
    if (rfqForm) {
        rfqForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic client-side validation check
            if (rfqForm.checkValidity()) {
                // Hide any previous errors
                document.getElementById('form-error-message').classList.add('hidden');
                
                // Construct mailto link
                const formData = new FormData(rfqForm);
                let mailBody = "New RFQ Submission from Website:\n\n";
                for (let [key, value] of formData.entries()) {
                    mailBody += `${key}: ${value}\n`;
                }
                
                // Open mail client (simulate sending for static site)
                window.location.href = `mailto:udhayatexstyles@gmail.com?subject=Website Enquiry: ${formData.get('Company')}&body=${encodeURIComponent(mailBody)}`;
                
                // Show success state
                document.getElementById('form-success-message').classList.remove('hidden');
            } else {
                // Show error state
                document.getElementById('form-error-message').classList.remove('hidden');
                // Let the browser show native validation tooltips
                rfqForm.reportValidity();
            }
        });
    }
});
