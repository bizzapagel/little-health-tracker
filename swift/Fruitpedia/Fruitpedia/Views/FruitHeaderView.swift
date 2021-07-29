//
//  FruitHeaderView.swift
//  Fruitpedia
//
//  Created by Dave Miller on 7/28/21.
//

import SwiftUI

struct FruitHeaderView: View {
	
	// MARK: - Properties
	
	var fruit: Fruit
	
	// MARK: - Body
	
    var body: some View {
		ZStack {
			LinearGradient(gradient: Gradient(colors: fruit.gradientColors), startPoint: .top, endPoint: .bottom)
			Image(fruit.image)
				.resizable()
				.scaledToFit()
				.shadow(color: Color(red: 0, green: 0, blue: 0, opacity: 0.3), radius: 3, x: 2, y: 2)
				.padding(.vertical, 20)
		}
		.frame(height: 440)
    }
}

// MARK: - Preview

struct FruitHeaderView_Previews: PreviewProvider {
    static var previews: some View {
		FruitHeaderView(fruit: fruitData[0])
			.previewLayout(.fixed(width: 375, height: 440))
    }
}
