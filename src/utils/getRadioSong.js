import fetch from 'node-fetch';

const getRadioSong = async () => {
  try {
    const response = await fetch('https://radio.edmateo.site/status-json.xsl');
    const data = await response.json();
    return data.icestats.source.title;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getRadioSong };
