import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function Section({children, title}) {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
        
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
        ]}>
        {children}
      </Text>
    </View>
  );
}

function DashboardScreen() {


  return (
      <ScrollView
        
        // contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}
        // contentInsetAdjustmentBehavior="automatic"
       >
        <View
           style={{flex:1,backgroundColor:'#ffff',overflow:'scroll'}}
          >
          <Section title="Step One">
            Edit asd sdf<Text style={styles.highlight}>App.tsx</Text> to change this sdkfjh
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
          </Section>
          <Section title="Debug">
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <Section title="Step One">
            Edit asd<Text style={styles.highlight}>App.tsx</Text> to change this sdkfjh
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
          </Section>
          <Section title="Debug">
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <Section title="Step One">
            Edit asd<Text style={styles.highlight}>App.tsx</Text> to change this sdkfjh
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
          </Section>
          <Section title="Debug">
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DashboardScreen;
