import { View, Image, StyleSheet, Text, Pressable } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const ProductScreen = () => {
    return (
        <View>
            <View style={styles.containerBookImg}>
                <Image style={styles.productImg} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/Book-Shop/assets/book.jpg')} />
                <Image style={styles.restrictionImg} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/Book-Shop/assets/16+.png')} />
                <Image style={styles.bestsellerImg} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/Book-Shop/assets/bestseller.png')} />
                <Image style={styles.topsaleImg} source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/Book-Shop/assets/topsale.png')} />
            </View>
            <View style={styles.containerBookDscrp}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.titleTxt}>The subtle art of not giving a f***</Text>
                    <Text style={styles.categoryTxt}>TEXT</Text>
                </View>
                <Text style={styles.subtitleTxt}>A counterintuitive approach to living a good life</Text>
                <Text>Autor: <Text style={styles.autorTxt}>Mark Manson</Text></Text>
                <View style={styles.containerRating}>
                    <Text style={{ ...styles.rateTopTxt, paddingLeft: 0 }}>
                        4,2 <FontAwesome name="star" size={20} color="#FF4C00" /> {'\n'}
                        <Text style={styles.rateBottomTxt}>12 003</Text>
                    </Text>
                    <Text style={{ ...styles.rateTopTxt, color: '#1D6DEB' }}>
                        4,0 <FontAwesome5 name="book-open" size={20} color="#1D6DEB" /> {'\n'}
                        <Text style={styles.rateBottomTxt}>8923</Text>
                    </Text>
                    <Text style={{ ...styles.rateTopTxt, color: '#3B393F', borderRightWidth: 0 }}>
                        814 <MaterialCommunityIcons name="comment-text" size={20} color="#3B393F" /> {'\n'}
                        <Text style={styles.rateBottomTxt}>opinions</Text>
                    </Text>
                </View>
                <View style={styles.readLikeBtns}>
                    <Pressable style={{ ...styles.readLikeBtn, width: '65%' }}>
                        <Octicons name="book" size={20} color="#78777B" />
                        <Text style={styles.readLikeTxt}>  Read the fragment</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.readLikeBtn, width: '20%', marginLeft: 10 }}>
                        <FontAwesome5 name="heart" size={20} color="#78777B" />
                        <Text style={styles.readLikeTxt}>  Like</Text>
                    </Pressable>
                    <Pressable style={{ ...styles.readLikeBtn, width: '10%' }}>
                        <Text style={styles.readLikeTxt}>•••</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.buyDownloadBtn}>
                    <Text style={styles.buyDownloadTxt}>
                        BUY AND DOWNLOAD FOR 25 $
                    </Text>
                </Pressable>
                <Image
                    style={{width: '97.5%', height: '4%'}}
                    source={require('C:/Users/renat/Desktop/Prog/Lessons/GitHub/Book-Shop/assets/paymentMethods.png')}
                />
                <View style={styles.containerAfterPurchase}>
                    <Text style={{ fontWeight: 'bold', color: '#848387' }} >
                        HOW TO READ THE BOOK AFTER PURCHASE
                    </Text>
                    <View style={styles.containerReadMethods}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '45%'
                        }}>
                            <Ionicons name="logo-apple" size={30} color="#969696" />
                            <FontAwesome name="android" size={30} color="#A4CA39" />
                            <FontAwesome name="windows" size={24} color="#00A2F2" />
                            <Text style={styles.readMethodsTxt}>Smartfon, {'\n'}tablet</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '45%'
                        }}>
                            <MaterialCommunityIcons name="laptop" size={35} color="#FF500B" />
                            <Text style={styles.readMethodsTxt}>Computer, {'\n'}laptop</Text>
                            <Ionicons name="md-reader-outline" size={30} color="#FF500B" />
                            <Text style={styles.readMethodsTxt}>Reader</Text>
                        </View>
                    </View>
                    <Text style={styles.downloadMethods}>
                        DOWNLOAD:
                        <Text style={{ fontWeight: 'bold', color: '#818084' }}>   FB2    EPUB    iOS.EPUB    7 more</Text>
                    </Text>
                    <Text
                        style={{
                            paddingTop: 20,
                            fontWeight: 'bold',
                            color: '#848387'
                        }}
                    >
                        DO NOT HAVE TIME TO READ THE BOOK?
                    </Text>
                    <Pressable style={styles.listenFragmentBtn}>
                        <FontAwesome name="play" size={15} color="#3B393F" />
                        <Text style={{ ...styles.buyDownloadTxt, color: 'black' }}>   LISTEN TO THE FRAGMENT</Text>
                    </Pressable>
                </View>
                <View style={styles.containerSuggest}>
                    <SimpleLineIcons name="like" size={30} color="#FF500B" />
                    <View style={{flexDirection: 'column', paddingLeft: 15}}>
                        <Text style={{ ...styles.buyDownloadTxt, color: 'black' }}>SUGGEST THE BOOK TO YOUR FRIENDS!</Text>
                        <Text style={{ ...styles.readLikeTxt, lineHeight: 15 }}>For friends - discount 10%, for you - dollars</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    containerBookImg: {
        alignItems: 'center',
        paddingVertical: 5
    },
    containerBookDscrp: {
        alignContent: 'flex-start',
        paddingLeft: 11
    },
    containerRating: {
        flexDirection: 'row',
        paddingTop: 21
    },
    containerAfterPurchase: {
        width: '97.5%',
        padding: 18,
        backgroundColor: '#E8E8E8',
    },
    containerReadMethods: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    downloadMethods: {
        fontWeight: 'bold',
        color: '#848387',
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#D4D3D4'
    },
    containerSuggest: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '97.5%',
        paddingVertical: 10,
        backgroundColor: '#E8E8E8'
    },
    productImg: {
        width: '95%',
        height: 550, // why 100% does not work ???????????????
        position: 'relative'
    },
    restrictionImg: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 25,
        bottom: 20
    },
    bestsellerImg: {
        width: 90,
        height: 55,
        position: 'absolute',
        left: 4,
        top: 15
    },
    topsaleImg: {
        width: 90,
        height: 55,
        position: 'absolute',
        left: 4,
        top: 60
    },
    titleTxt: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoryTxt: {
        textAlign: 'center',
        marginTop: 7,
        paddingBottom: 20,
        width: 45,
        height: 17,
        color: 'grey',
        backgroundColor: 'lightgrey',
        borderRadius: 9,
        marginLeft: 10
    },
    subtitleTxt: {
        paddingVertical: 14,
        fontSize: 16,
        color: '#78777B'
    },
    autorTxt: {
        color: '#116FDC',
        textDecorationLine: 'underline'
    },
    rateTopTxt: {
        fontSize: 20,
        lineHeight: 16,
        fontWeight: 'bold',
        color: "#FF4C00",
        paddingHorizontal: 13,
        borderRightWidth:1,
        borderRightColor: '#C9C9C9'
    },
    rateBottomTxt: {
        fontSize: 15,
        fontWeight: 500,
        color: '#78777B'
    },
    readLikeBtns: {
        flexDirection: 'row',
    },
    readLikeBtn: {
        marginTop: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#C9C9C9',
        paddingVertical: 9,
        color: '#78777B'
    },
    readLikeTxt: {
        fontSize: 15,
        fontWeight: 499,
        color: '#78777B'
    },
    buyDownloadBtn: {
        marginTop: 13,
        width: '97.5%',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 3,
        backgroundColor: '#0E920E'
    },
    buyDownloadTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    readMethodsTxt: {
        lineHeight: 17,
        fontWeight: 499,
        color: '#848387'
    },
    listenFragmentBtn: {
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#3B393F',
    }
})