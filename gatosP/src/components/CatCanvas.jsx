import React, { useEffect, useRef } from 'react';

const CatCanvas = ({ fact, imageUrl }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!imageUrl) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();

        image.src = imageUrl;
        image.onload = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the cat image
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            // Set text properties
            const text = fact.split(' ', 3).join(' ');
            ctx.font = '30px Arial';
            ctx.fillStyle = 'red';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Draw the text
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
        };

        image.onerror = (error) => {
            console.error('Error loading image:', error);
        };
    }, [imageUrl, fact]);

    return (
        <canvas
            ref={canvasRef}
            width={600}
            height={400}
            style={{ border: '1px solid black' }}
        />
    );
};

export default CatCanvas;
