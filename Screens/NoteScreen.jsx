import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../components";
import { AddNote, ArrowLeft, DownloadBtn, Pencil } from "../assets";

const NoteScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height * 0.75;

  return (
    <SafeAreaView className="px-5">
      {/* Background */}
      <View className="absolute z-0">
        <Background />
      </View>

      {/* Header */}
      <View className="relative mt-7">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute"
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View className="mx-auto">
          <Text className="text-base text-[#000] font-bold">Logarithm</Text>
        </View>

        <TouchableOpacity className="absolute right-0">
          <DownloadBtn />
        </TouchableOpacity>
      </View>

      {/* Note */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: windowHeight }}
        className="px-2 mt-[34px] bg-bgBlack rounded-[10px]"
      >
        <View className="h-full pt-4 pb-1">
          <Text className="text-bgWhite text-sm font-normal">
            architecto, numquam inventore dicta quo molestiae. Expedita
            repellendus nobis maiores recusandae assumenda? Autem odio
            laudantium, mollitia, praesentium qui sed minus ea voluptatibus
            earum voluptate dolor? Molestiae sit quibusdam mollitia maxime
            repellat expedita optio dolorum odit minus? Facilis illum mollitia
            repellendus harum, doloremque et, itaque eos dicta eum sed
            consequuntur soluta libero illo cum earum, laudantium ab? Corrupti
            consectetur tempore eos quisquam repellendus, ratione excepturi
            deserunt officiis! Reiciendis, laboriosam, mollitia ut quos dicta
            veritatis voluptas voluptatum ducimus fugit quae adipisci sit
            beatae. Officiis deserunt impedit explicabo earum ullam mollitia
            voluptate? Voluptate provident iusto omnis amet sequi doloribus. At
            pariatur praesentium sit sapiente laudantium soluta eum officia
            accusantium obcaecati reiciendis libero mollitia sunt commodi
            quibusdam a dicta nulla aspernatur, adipisci assumenda dolore quis
            modi! Ipsam magni error laudantium! Quas voluptas, odio culpa
            officia suscipit quis aperiam eius repellat exercitationem similique
            numquam eos delectus, error obcaecati nobis debitis illum quos
            tempore voluptatem reprehenderit asperiores consequatur corrupti
            odit cum. Tempora. Ipsum totam blanditiis ad facilis laudantium
            ullam delectus cupiditate? Qui, autem. Tempore laborum explicabo
            quasi sint cumque sapiente deserunt rem, ipsum officia perferendis
            velit nihil et optio doloremque? Corrupti, illo. Aliquid, repellat.
            Natus fugit unde ullam sequi porro officia libero necessitatibus,
            molestiae, tenetur iusto ut beatae molestias ratione esse soluta
            quo, repudiandae numquam temporibus voluptatem ipsam id doloremque
            itaque voluptatum. Ex ipsam, odit consequatur officiis enim soluta
            illum porro voluptates reprehenderit. Voluptatibus, voluptate
            repellat, magni quo quisquam officiis corporis animi inventore
            temporibus quaerat consequuntur quam cupiditate facilis suscipit!
            Facere, quia? Mollitia perspiciatis aut voluptatibus amet
            consequuntur ea eos neque quae voluptate beatae architecto nisi
            laudantium, consectetur maiores corporis est iste, libero error
            suscipit! Ullam accusamus saepe exercitationem dolores nemo
            praesentium. Pariatur, consequatur laborum? Suscipit soluta facilis
            quia, a perspiciatis nisi neque dolores atque necessitatibus
            accusantium vitae reiciendis, nostrum ex dicta labore quibusdam vero
            eius aliquam tempore! Praesentium ipsam ducimus quos! Necessitatibus
            rerum asperiores alias eius sit nobis neque officiis fugiat animi
            perferendis ex ab explicabo dolore aliquam praesentium eaque, minus
            maxime modi distinctio quos impedit. Vitae pariatur ipsam ab
            delectus? Facilis, doloremque numquam alias molestiae sit ratione,
            nesciunt magnam quam sunt odio eligendi, laboriosam velit
            repellendus officiis pariatur hic corporis autem officia assumenda
            cum. Possimus, aspernatur dolorem. Tempore, provident at. Laudantium
            eveniet minus commodi voluptatem magnam consequatur nemo repudiandae
            quam, quod ad, repellat minima qui! Non est repudiandae rem eum
            consequatur voluptatem! Maiores numquam molestiae illum, consequatur
            ipsa cumque? Laborum. Harum deleniti tempore vitae voluptates, rem
            commodi molestiae sed quia ipsa doloribus delectus odit error
            aspernatur consequatur natus qui, animi vero velit autem
            reprehenderit earum ex! Tempora distinctio non rerum? Aliquam
            corrupti error fugiat laudantium ducimus quidem minima, officia
            illum molestias vero sunt quam quibusdam. Sint ea nobis repellat
            tenetur facere repellendus, ab libero? Recusandae, alias sapiente.
            Incidunt, ut quae? Non sequi earum asperiores corrupti atque vero
            deleniti nesciunt doloribus tempore, ratione obcaecati illum ipsam
            assumenda sunt et! Eaque, exercitationem enim doloremque sunt
            debitis eligendi numquam consequatur reprehenderit explicabo autem?
            Quidem commodi fugiat consectetur omnis recusandae at nam quo modi
            cupiditate inventore natus vitae, vero, maiores voluptatem porro
            ipsam fuga dolorem magni. Eum impedit ducimus sed libero, eligendi
            ipsam ipsum? Omnis facilis qui pariatur fugit repudiandae corporis
            fugiat veritatis, quam neque reiciendis consequuntur, saepe
            molestias iure commodi quod quae? Aspernatur, soluta quod! Minus ad
            fuga sit magnam placeat, ipsum consequatur! Voluptates maxime
            nesciunt debitis ullam totam voluptatibus, consectetur asperiores
            dolore quis. Sunt vitae delectus velit voluptas. Dolorem facere,
            fugit officiis repellat tempora asperiores rem at, sint dolor, cum
            eius accusantium. Ut, qui recusandae nobis, autem asperiores
            distinctio optio unde adipisci corrupti repellendus, ab at. Vel
            quisquam commodi labore necessitatibus sed sit asperiores molestiae
            animi blanditiis? Saepe expedita porro recusandae adipisci. Labore
            aliquid architecto minima accusantium aut animi id necessitatibus
            recusandae dolore. Minus quae aliquid dolores laborum distinctio
            possimus, recusandae autem dolorum hic delectus saepe tempore
            officia vero unde aliquam est. Quis modi necessitatibus repudiandae.
            Dolorem odit magnam quidem ullam id amet eaque atque, aspernatur,
            dolore commodi exercitationem quasi consequuntur minima, debitis
            nobis dolorum quibusdam error! Veniam tempora quos doloribus
            consequatur. Architecto recusandae, repellat, animi soluta commodi
            libero tempore exercitationem dolores repellendus delectus officiis
            consectetur dolorem rem, fugiat aperiam pariatur maxime doloribus
            sint vel consequuntur facere quibusdam inventore quas suscipit! Ab.
            Neque ipsam harum earum, suscipit tenetur eos, tempora, ratione
            commodi quam eveniet quod nobis. Eum, ullam! Delectus, officiis et
            eum est aperiam magnam deserunt voluptate eveniet consectetur quas
            deleniti dicta? Ducimus dolorem placeat accusamus deserunt totam ex
            laudantium tempore illo praesentium! Eaque perspiciatis nemo amet a,
            reprehenderit, delectus odio laborum aliquid ex quis quas, corrupti
            perferendis fuga similique voluptatem libero! Ullam inventore harum
            distinctio deleniti expedita labore facere iusto rem officia?
            Corporis velit ipsa sunt. Repudiandae labore, esse suscipit ex ab
            aperiam, perspiciatis, impedit tenetur ipsum unde dolorum eligendi
            similique? Quo animi quisquam sed harum atque quia! Veniam quam,
            quaerat nisi eveniet voluptatibus corrupti alias, explicabo
            perferendis possimus voluptatum dicta provident vel. Corrupti dicta
            at aliquid nam tempore magni dolore. Iste soluta consequatur
            suscipit, assumenda voluptates ullam rerum sint quasi facere
            explicabo odio quibusdam tempore dignissimos eveniet provident qui
            ipsum repellat culpa nam enim dolorum voluptatem, doloremque nobis?
            Maxime, ea. Libero qui veniam praesentium mollitia distinctio,
            asperiores deserunt esse nostrum dolor molestias laborum ea!
            Accusamus necessitatibus asperiores, sed perferendis quo quia,
            repellendus debitis tempora facere suscipit voluptatum animi sequi
            fugiat? Neque, pariatur? Quae facere reiciendis libero sed deleniti?
            Hic nisi, debitis harum laboriosam dolor libero autem, inventore
            esse eos at cupiditate incidunt in dignissimos dolores minima?
            Veritatis id corporis excepturi? Perferendis accusamus illum numquam
            aliquam ipsa atque quos sapiente in, deleniti, a saepe voluptate eos
            doloribus cupiditate, quasi non nisi dolore quia labore omnis
            mollitia! Aspernatur, culpa ut! Ipsum, esse! Repellendus sequi
            deleniti nulla. Optio repellat harum laboriosam itaque voluptate
            temporibus placeat dignissimos accusantium dolores. Mollitia, cumque
            eligendi veritatis cupiditate officiis perferendis facere? Sit ad
            provident a laboriosam? Quos, nisi. Enim dolor veniam mollitia
            minima tenetur optio adipisci obcaecati rem nemo dicta, ab
            asperiores? Fuga quia, nisi quidem, quisquam adipisci earum quos id
            excepturi fugit vitae sequi culpa odio ex. Dolor dolorem sit fugiat
            quis libero, quam in possimus eveniet fuga animi? Odio quia placeat
            debitis fugit incidunt quisquam, magni officia autem, magnam nulla
            exercitationem quasi harum alias earum enim. Quia culpa eum quo
            ullam blanditiis? Sequi earum, perferendis ipsam mollitia et sint
            autem aut id, eaque dolore rerum sapiente repudiandae voluptates,
            commodi illo. Provident reiciendis exercitationem dolores
            voluptatibus explicabo. Cupiditate maiores, incidunt magnam tempore
            repellendus quasi ullam possimus recusandae? Unde, voluptate?
            Necessitatibus expedita, a nam pariatur repellendus recusandae
            similique autem esse, illum, doloribus mollitia iste sequi id odio
            nisi. Animi quia porro, praesentium qui at architecto nulla?
            Eligendi dolore accusantium aspernatur ut repudiandae sequi dicta.
            Harum velit odio, quos itaque deleniti officia tempore, dolorum at
            est pariatur nesciunt accusamus. Accusantium et nihil harum, nam
            assumenda eaque odit quidem ipsum cum incidunt. Numquam, modi eaque
            aperiam amet nostrum quo. Eligendi in libero facere assumenda, ut
            unde officia corrupti. Dolores, laudantium? Quaerat placeat
            accusantium illo, ipsa voluptate consequuntur optio porro eveniet
            vero harum dolore cumque voluptatibus similique officia incidunt ut
            ad! Quia voluptates cupiditate recusandae, ullam nam nisi ipsum quos
            eligendi. Quibusdam ullam necessitatibus earum cumque mollitia.
            Accusamus dignissimos totam fugit magni culpa quisquam minima
            dolorem sunt qui. Mollitia nihil, vero doloribus voluptate, corrupti
            in consequuntur natus sunt id laborum quis? Consequatur accusantium
            error et explicabo, velit ab facilis corrupti a repudiandae vel
            ratione pariatur. Sed vel quo voluptas velit incidunt impedit.
            Alias, maiores modi. Voluptatum laborum labore ea at natus. Deserunt
            ipsum, autem error obcaecati veniam ducimus aliquam eaque molestias
            officia beatae est sunt rerum fugiat et in dignissimos. Repellat
            voluptatibus nihil quidem harum maiores laborum inventore eaque
            fugit cupiditate! Et asperiores minus incidunt maxime deserunt
            suscipit impedit, esse cupiditate vel enim quaerat delectus nesciunt
            numquam. Est, eligendi repudiandae expedita inventore a nam quo rem
            natus omnis harum saepe non. Assumenda laboriosam molestiae dicta
            vero, vitae suscipit ea recusandae doloremque dolore minima nostrum
            dolor veritatis quae! Iure, modi quos? Similique necessitatibus
            dolorum natus eaque suscipit recusandae alias beatae in incidunt.
            Unde quidem, animi quas illum cum numquam, hic quaerat nam eveniet
            inventore corrupti nisi provident id tenetur aspernatur, voluptate
            eum repudiandae. Reprehenderit rerum tenetur praesentium
            exercitationem sequi, repellendus similique ut? Veniam ex fuga
            deleniti praesentium voluptatum voluptatem ea vitae eveniet, quis
            nostrum dolorem ipsam, sunt quisquam animi iusto? Error possimus qui
            molestiae sed ratione adipisci voluptatibus laudantium illo odit
            praesentium! Aliquam, odio quas? Pariatur accusamus consequatur quia
            soluta, deleniti tenetur, minima rerum nobis aliquam sit adipisci,
            vitae debitis accusantium animi quasi. Non accusantium saepe,
            placeat autem fugit eos rerum. Quos. Impedit officia a omnis
            recusandae, alias perferendis minus maiores doloribus dolore
            repellat distinctio, libero possimus neque eum hic architecto
            explicabo eius facilis, tempore consequatur ab nisi nobis. A, ullam
            laudantium? Beatae earum omnis explicabo, vero in asperiores
            dignissimos dolores odio doloribus architecto quae optio nobis rerum
            eaque rem eos doloremque fugiat culpa ullam, voluptas reiciendis.
            Voluptas cumque quod repellendus fuga? Iusto voluptatibus, hic porro
            id iste quod consectetur tempore in doloremque. Doloremque ipsum
            eaque beatae hic facere harum corrupti, id voluptas nobis, ipsa
            tenetur? Voluptate quibusdam enim eveniet sit totam. Pariatur eaque
            voluptatem, alias fugit impedit consequuntur molestiae! Deserunt
            rerum debitis quasi harum totam molestias, illo pariatur dolore
            nostrum accusamus veritatis magnam dolores? Aliquid, provident
            accusantium at cupiditate dolore vitae. Et nisi placeat iste nulla
            commodi natus nihil officia, adipisci obcaecati necessitatibus fuga
            facilis ad est aspernatur voluptas ut cumque magnam sit facere nobis
            quam ipsa. Iste, exercitationem id! Culpa. Fuga, voluptas
            consectetur rerum quis expedita veniam aperiam. Ex corporis, iure
            inventore adipisci earum quam ipsa veniam aliquid nemo blanditiis.
            Ipsa voluptate eius rem mollitia dolore molestias placeat eum magni!
            Neque repellat itaque expedita sequi blanditiis at, est eos
            recusandae! Ex, quaerat veniam exercitationem earum recusandae
            repellendus ducimus deserunt harum voluptas voluptatibus molestias
            id ad tempore assumenda nobis numquam debitis! Magnam minus quos rem
            maxime consequuntur fugiat, aut accusantium iure! Reprehenderit
            consequatur deserunt cupiditate ut dicta, doloremque ipsum.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddNote")}
        className="mt-[10px] ml-auto"
      >
        <AddNote />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NoteScreen;
