//
//  FruitRowView.swift
//  Fruitpedia
//
//  Created by David Miller on 7/26/21.
//

import SwiftUI

struct FruitRowView: View {
    
    // MARK: - Properties
    
    // MARK: - Body
    
    var body: some View {
        Text("Howdy Doodle");
    }
}

// MARK: - Preview

struct FruitRowView_Previews: PreviewProvider {
    static var previews: some View {
        FruitRowView()
            .previewLayout(.sizeThatFits)
            .padding()
    }
}
