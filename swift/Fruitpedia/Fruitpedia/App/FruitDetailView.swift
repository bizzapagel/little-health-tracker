//
//  FruitDetailView.swift
//  Fruitpedia
//
//  Created by Dave Miller on 7/28/21.
//

import SwiftUI

struct FruitDetailView: View {
	
	// MARK: - Properties
	
	var fruit: Fruit
	
	// MARK: - Body
	
    var body: some View {
		NavigationView {
			ScrollView(.vertical, showsIndicators: false) {
				VStack(alignment: .center, spacing: 20) {
					// Image
					FruitHeaderView(fruit: fruit)
					// Content
					VStack(alignment: .leading, spacing: 20) {
						// Title
						Text(fruit.title)
							.font(.largeTitle)
							.fontWeight(.heavy)
							.foregroundColor(fruit.gradientColors[1])
						// Headline
						Text(fruit.headline)
							.font(.headline)
							.multilineTextAlignment(.leading)
						// Nutrients
						FruitNutrientsView(fruit: fruit)
						// Subheadline
						Text("Learn more about \(fruit.title)".uppercased())
							.fontWeight(.bold)
							.foregroundColor(fruit.gradientColors[1])
						// Description
						Text(fruit.description)
							.multilineTextAlignment(.leading)
							
						// Link
						SourceLinkView(fruit: fruit)
							.padding(.top, 10)
							.padding(.bottom, 20)
					}
					.padding(.horizontal, 20)
					.frame(maxWidth: 640, alignment: .center)
				}
				.navigationBarTitle(fruit.title, displayMode: .inline)
				.navigationBarHidden(true)
			}
			.edgesIgnoringSafeArea(.top)
		}
		.navigationViewStyle(StackNavigationViewStyle())
    }
}

// MARK: - Preview

struct FruitDetailView_Previews: PreviewProvider {
    static var previews: some View {
        FruitDetailView(fruit: fruitData[0])
    }
}
