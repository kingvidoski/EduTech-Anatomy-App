import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Book, Glassmorphism, Logo, QuizIcon } from '../components';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
    const navigation = useNavigation<ModelScreenNavigationProp>();

    return (
        <SafeAreaView className='relative bg-[#F5F5F5] h-full z-0'>

            {/* Background */}
            <Glassmorphism />


            <View className='h-full absolute px-5 pt-5 z-10'>

                {/* Header */}
                <View className='w-full flex-row items-center'>
                    <Logo />
                    <QuizIcon />
                </View>

                <View className='flex-row flex-1'>
                    <TouchableOpacity
                        style={styles.shadowProp}
                        className='bg-white w-40 h-44 rounded-[20px] mt-32 mr-7 items-center justify-center'>
                        <Book />
                        <Text className='text-blackColor text-sm font-poppins font-normal mt-1'>Lecture Note</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Models')}
                        className='bg-white w-40 h-44 rounded-[20px] mt-52 items-center justify-center'>
                        <Book />
                        <Text className='text-blackColor text-sm font-poppins font-normal mt-1'>3D Models</Text>
                    </TouchableOpacity>
                </View>


                <View className='items-center mb-24'>
                    <Text className='max-w-[210px] text-[8px] text-blackColor font-poppinsSemiBold font-semibold text-center'>
                        Cross River State University Of Technology Faculty Of
                        <Text className='font-poppinsBold font-bold'> Basic Medical Science</Text> Department
                        <Text className='font-poppinsBold font-bold'> Of Human Anatomy</Text>
                    </Text>

                    <Image
                        source={require('../assets/crutechLogo.png')}
                        className='mt-3'
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
})