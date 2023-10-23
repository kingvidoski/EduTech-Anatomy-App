import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Musclesvg3, OnBoardingSwap } from '../components'
import useToggle from '../hooks/useToggle'
import { useNavigation } from '@react-navigation/native';


const Onboarding = () => {
    const navigation = useNavigation<OnBoardingScreenNavigationProp>();
    const [step, setStep] = useState<number>(1);
    const [skip, setSkip] = useToggle(false);

    function handleStep() {
        if (step === 2) {
            setSkip();
        } else {
            setStep(prev => prev + 1);
        }
    };

    return (
        <SafeAreaView className='h-full px-5 bg-bgWhite items-center justify-center'>
            <View className='w-full h-[410px]'>
                {skip ?
                    <Musclesvg3 />
                    :
                    <OnBoardingSwap
                        step={step}
                    />}
            </View>

            {/* caurosel dots */}
            {!skip && <View className='flex-row mb-[21px] gap-2'>
                <View className='w-[49px] h-[6px] bg-blueColor rounded-[47px]' />
                <View className='w-[10px] h-[6px] bg-greyDot rounded-[47px]' />
            </View>}

            {/* Buttons */}
            <View className='w-full'>
                {!skip ?
                    <>
                        <TouchableOpacity
                            className='w-full pt-3 pb-[14px] mb-6 bg-blueColor rounded items-center'
                            onPress={handleStep}
                        >
                            <Text className='text-sm text-bgWhite font-poppinsBold font-bold'>Next</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className='w-full pt-3 pb-[14px] rounded shadow-sm items-center'
                            onPress={setSkip}
                        >
                            <Text className='text-sm text-blackColor font-poppins font-normal'>Skip</Text>
                        </TouchableOpacity>
                    </> :
                    <TouchableOpacity
                        className='w-full pt-3 pb-[14px] mb-6 bg-blueColor rounded items-center'
                        onPress={() => navigation.navigate('Main')}
                    >
                        <Text className='text-sm text-bgWhite font-poppinsBold font-bold'>
                            Start your experience
                        </Text>
                    </TouchableOpacity>
                }

            </View>

        </SafeAreaView>
    )
}

export default Onboarding