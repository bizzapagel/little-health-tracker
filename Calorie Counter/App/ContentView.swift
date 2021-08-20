//
//  ContentView.swift
//

import SwiftUI

struct ContentView: View {
	
	// MARK: - Properties
	
	@State var selectedIndex = 0
	
	// MARK: - Body
	
    var body: some View {
		VStack {
			
			ZStack {
				Text("Content Pages")
			}
			
			Spacer()
			
			// Navigation
			HStack() {
				Spacer()
				
				Button(action: {
					// Do somethign on tap
				}, label: {
					Image(systemName: "house")
						.font(.system(size: 24, weight: .regular, design: .default))
						.foregroundColor(.black)
				})
				
				Spacer()
				
				Button(action: {
					// Do somethign on tap
				}, label: {
					Image(systemName: "gearshape")
						.font(.system(size: 24, weight: .regular, design: .default))
						.foregroundColor(.black)
				})
				
				Spacer()
			}
		}
    }
}

// MARK: - Preview

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
