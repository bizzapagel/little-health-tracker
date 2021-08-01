//
//  ContentView.swift
//  Fruitpedia
//
//  Created by David Miller on 7/23/21.
//

import SwiftUI

struct ContentView: View {
    
    // MARK: - Properties
	
	@State private var isShowingSettings: Bool = false
	
    var fruits: [Fruit] = fruitData
    
    // MARK: - Body
    
    var body: some View {
        NavigationView {
			Group {
				List {
					ForEach(fruits) { item in
						NavigationLink(destination: FruitDetailView(fruit: item)) {
							FruitRowView(fruit: item)
						}
					}
				}
				.navigationTitle("Fruits")
				.navigationBarItems(trailing:
					Button(action: {
						isShowingSettings = true
						
					}) {
						Image(systemName: "slider.horizontal.3")
					}
					.sheet(isPresented: $isShowingSettings) {
						SettingsView()
					}
				)
			}
        }
		.navigationViewStyle(StackNavigationViewStyle())
    }
}

// MARK: - Preview

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
		ContentView(fruits: fruitData)
    }
}
