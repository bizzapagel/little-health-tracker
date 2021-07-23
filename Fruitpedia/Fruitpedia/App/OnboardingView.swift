//
//  OnboardingView.swift
//  Fruitpedia
//
//  Created by Dave Miller on 7/23/21.
//

import SwiftUI

struct OnboardingView: View {
    
    // MARK: - Properties
    
    init() {
        UIPageControl.appearance().currentPageIndicatorTintColor = .black
        UIPageControl.appearance().pageIndicatorTintColor = UIColor.black.withAlphaComponent(0.2)
    }
    
    // MARK: - Body
    
    var body: some View {
        TabView {
            ForEach(0..<5) { item in
                FruitCardView()
            }
        }
        .tabViewStyle(PageTabViewStyle(indexDisplayMode: .always))
    }
}

// MARK: - Preview

struct OnboardingView_Previews: PreviewProvider {
    static var previews: some View {
        OnboardingView()
    }
}
