import React from 'react';

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14231.268406557558!2d75.73046688889062!3d26.90929911085175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e9b0741a0d%3A0x4e3dba6acddef375!2sKanhaiya%20Mansion!5e0!3m2!1sen!2sin!4v1737363719667!5m2!1sen!2sin"
        width='100%'
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
