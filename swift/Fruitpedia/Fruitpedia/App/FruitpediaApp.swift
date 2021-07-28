//
//  FruitpediaApp.swift
//  Fruitpedia
//
//  Created by David Miller on 7/23/21.
//

import SwiftUI

@main
struct FruitpediaApp: App {
    @AppStorage("isOnboarding") var isOnboarding: Bool = true
    
    var body: some Scene {
        WindowGroup {
            if !isOnboarding {
                OnboardingView()
            } else {
                ContentView()
            }
            
        }
    }
}
