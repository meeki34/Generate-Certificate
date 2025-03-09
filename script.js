document.getElementById('certificateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const recipientName = document.getElementById('recipientName').value;
    const courseTitle = document.getElementById('courseTitle').value;
    const completionDate = document.getElementById('completionDate').value;

    // Get canvas context
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw certificate background (add your own design)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add border
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, canvas.width-10, canvas.height-10);

    // Add header text
    ctx.font = '40px "Great Vibes", cursive';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText('Certificate of Completion', canvas.width/2, 120);

    // Add recipient name
    ctx.font = '60px "Arial", sans-serif';
    ctx.fillText(recipientName, canvas.width/2, 300);

    // Add course title
    ctx.font = '30px "Arial", sans-serif';
    ctx.fillText(`for successfully completing ${courseTitle}`, canvas.width/2, 360);

    // Add date
    ctx.font = '25px "Arial", sans-serif';
    ctx.fillText(`Date: ${completionDate}`, canvas.width/2, 600);

    // Add signature (optional)
    ctx.font = 'italic 30px "Arial", sans-serif';
    ctx.fillText('John Doe, Instructor', canvas.width/2, 700);

    // Add watermark/logo (optional)
    const img = new Image();
    img.src = 'logo.png'; // Add your logo path
    img.onload = function() {
        ctx.drawImage(img, canvas.width - 150, canvas.height - 100, 100, 100);
    };
});

// Download functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    const canvas = document.getElementById('certificateCanvas');
    const link = document.createElement('a');
    link.download = 'certificate.jpg';
    link.href = canvas.toDataURL();
    link.click();
});