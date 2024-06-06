import React, {useState,useEffect} from 'react'
import { Box, Image,SimpleGrid,Heading} from '@chakra-ui/react';
import useFetch from '../useFetch';
const GameScreenshots = ({id}) => {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    

    useEffect(() => {
        const fetchScreenshots = async () => {
          try {
            const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=b2ad4f7bf28f403e80e2c2bdbfce5824`, {
              headers: {
                'User-Agent': 'Arcade', 
                'Authorization': 'b2ad4f7bf28f403e80e2c2bdbfce5824', 
              }
            });
    
            if (response.ok) {
              const data = await response.json();
              const screenshotUrls = data.results.map(screenshot => screenshot.image);
              setScreenshots(screenshotUrls);
            } else {
              console.error('Failed to fetch screenshots');
            }
          } catch (error) {
            console.error('Error fetching screenshots:', error);
          }
        };
    
        fetchScreenshots();
      }, [id]);


// functionality for full screen image on click
const toggleFullscreen = (url) => {
    if (fullscreenImage === url) {
      setFullscreenImage(null);
    } else {
      setFullscreenImage(url);
    }
  };
       
  return (
  <>
  <Heading color="white" mt="20px">Screenshots</Heading>
    <SimpleGrid spacing={7} minChildWidth={250} mt="30px">
  {screenshots.map((url, index) => (
      <Image
      onClick={() => toggleFullscreen(url)}
      style={{ cursor: 'pointer' }}
      key={index}
      src={url}
      alt={`Screenshot ${index + 1}`}
    />
   
    
  ))}
</SimpleGrid>
    {fullscreenImage && (
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={() => toggleFullscreen(null)}
        >
          <img src={fullscreenImage} style={{ maxHeight: '90%', maxWidth: '90%' }} alt="Fullscreen" />
        </Box>
      )}
  </>
    


  )
}

export default GameScreenshots
