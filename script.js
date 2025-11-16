$(document).ready(function() {
    
    $('.nav-btn').click(function() {
        $('.nav-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('#inquiryForm').on('submit', function(e) {
        e.preventDefault();
        $('#successModal').modal('show');
        
        $('.inquiry-section').fadeOut(300).fadeIn(300);
    });

    $('.product-item').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.1)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': 'none'
            });
        }
    );


    $('.main-container').hide().fadeIn(500);
});

function callUs() {
    if (confirm('Call Ahmad at +60 12-345 6789?')) {
        window.location.href = 'tel:+60123456789';
    }
}

function emailUs() {
    const subject = encodeURIComponent('Smart Living Hub Inquiry');
    const body = encodeURIComponent('Hello, I would like to know more about your smart devices.');
    window.location.href = `mailto:ahmad@smartlivinghub.com?subject=${subject}&body=${body}`;
}

function whatsappUs() {
    $('#whatsappModal').modal('show');
}

function openWhatsApp() {
    const message = encodeURIComponent('Hi Smart Living Support');
    window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
    $('#whatsappModal').modal('hide');
}

function openWhatsAppWeb() {
    const message = encodeURIComponent('Hi Smart Living Support');
    window.open(`https://web.whatsapp.com/send?phone=60123456789&text=${message}`, '_blank');
    $('#whatsappModal').modal('hide');
}

function viewPDF() {
    
    alert('Opening smartlight-details.pdf...');
    
    $('.btn-primary').html('<i class="fas fa-spinner fa-spin"></i> Loading...');
    setTimeout(() => {
        $('.btn-primary').html('View PDF');
    }, 1000);
}

$('.btn-contact').hover(
    function() {
        $(this).css('background', '#e8f4fc');
    },
    function() {
        $(this).css('background', 'white');
    }
);