import { Image, Text, View } from "react-native";
import {global} from "../../css/Styles.js"

export default function Content() {
    return (
        <View style={global.content}>
            <View style={global.beneficios}>
                <Text style={global.txtbeneficios}>O que deseja fazer?</Text>
                <Text style={global.txtveja}>Veja benefícios</Text>
            </View>

            <View style={global.nossasfuncoes1}>
                <View style={global.cartaopre}>
                    <Image source={require ("../../assets/cartao.png")} style={global.imgcartao} />
                    <Text style={global.txtcartao}>Recarga Cartão pré-pago</Text>
                </View>

                <View style={global.transferencia}>
                    <Image source={require ("../../assets/transferencia.png")} style={global.imgtransferencia} />
                    <Text style={global.txttransferencia}>Transferência bancária</Text>
                </View>
            </View>

            <View style={global.nossasfuncoes2}>
                <View style={global.depositar}>
                    <Image source={require ("../../assets/deposito.png")} style={global.imgdepositar} />
                    <Text style={global.txtdepositar}>Depositar dinheiro</Text>
                </View>

                <View style={global.atendimento}>
                    <Image source={require ("../../assets/chat.png")} style={global.imgatendimento} />
                    <Text style={global.txtatendimento}>Atendimento/Chat</Text>
                </View>
            </View>

            <View style={global.nossasfuncoes3}>
                <View style={global.pagamentos}>
                    <Image source={require ("../../assets/pagamentos.png")} style={global.imgpagamentos} />
                    <Text style={global.txtpagamentos}>Pagamentos</Text>
                </View>

                <View style={global.pix}>
                    <Image source={require ("../../assets/pix.png")} style={global.imgpix} />
                    <Text style={global.txtpix}>Pix</Text>
                </View>
            </View>
        </View>
    );
}