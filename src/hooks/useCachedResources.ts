// This is a hook that will load fonts on application startup
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


/**
 * Montserrat Extrabold
 * Montserrat Bold
 * Montserrat Semibold
 * Montserrat Medium
 * Montserrat Regular
 */

const useCachedResources  = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // This useEffect will load any resource or data needed prior to rendering the app
    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
              // Keep the splash screen visible while we fetch resources
              SplashScreen.preventAutoHideAsync();
      
              // Load fonts
              await Font.loadAsync({
                'montserrat-extrabold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
                'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
                'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
                'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
                'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
              });
            } catch (error) {
              // We might want to provide this error information to an error reporting service
              console.warn(error);
            } finally {
              setLoadingComplete(true);
              SplashScreen.hideAsync();
            }
          };
          loadResourcesAndDataAsync();
    },[]);
    return isLoadingComplete;
}

export default useCachedResources;