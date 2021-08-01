//
//  SettingsView.swift
//  Fruitpedia
//
//  Created by Dave Miller on 7/29/21.
//

import SwiftUI

struct SettingsView: View {
	
	// MARK: - Properties
	
	@Environment(\.presentationMode) var presentationMode
	@AppStorage("isOnboarding") var isOnboarding: Bool = false
	
	// MARK: - Body
	
    var body: some View {
		NavigationView {
			ScrollView(.vertical, showsIndicators: false) {
				VStack(spacing: 20) {
					
					// MARK: - About
					
					GroupBox(
						label: SettingsLabelView(labelText: "About", labelImage: "info.circle")
					) {
						Divider().padding(.vertical, 4)
						HStack(alignment: .top, spacing: 10) {
							Image("logo")
								.resizable()
								.scaledToFit()
								.frame(width: 80, height: 80)
								.cornerRadius(9)
							Text("Most fruits are naturally low in fat, sodium, and calories. None have cholesterol. Fruits are sources of many essential nutrients, including potassium, dietary fiber, vitamins, and much more.")
								.font(.footnote)
						}
					}
					
					// MARK: - Customization
					
					GroupBox(
						label: SettingsLabelView(labelText: "Customization", labelImage: "paintbrush")
					) {
						Divider().padding(.vertical, 4)
						Text("If you wish, you may use this toggle to reset the app. This will restart the onboarding process.")
							.font(.footnote)
							.multilineTextAlignment(.leading)
							.padding(.bottom, 8)
						Toggle(isOn: $isOnboarding) {
							if isOnboarding {
								Text("Restarted".uppercased())
									.fontWeight(.bold)
									.foregroundColor(.green)
							} else {
								Text("Restart".uppercased())
									.fontWeight(.bold)
									.foregroundColor(Color.secondary)
							}
						}
						.padding()
						.background(
							Color(UIColor.tertiarySystemBackground)
								.clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
						)
					}
					.layoutPriority(1)
					
					// MARK: - Application
					
					GroupBox(
						label: SettingsLabelView(labelText: "Application", labelImage: "apps.iphone")
					) {
						SettingsRowView(
							name: "Developer",
							content: "Frank Mudd"
						)
						SettingsRowView(
							name: "Designer",
							content: "Sanantha Wrong"
						)
						SettingsRowView(
							name: "Compatibility",
							content: "iOS 14"
						)
						SettingsRowView(
							name: "Website",
							linkLabel: "www.google.com",
							linkDestination: "https://google.com"
						)
						SettingsRowView(
							name: "Twitter",
							linkLabel: "@FrankMudd",
							linkDestination: "https://twitter.com"
						)
						SettingsRowView(
							name: "Version",
							content: "1.1.0"
						)
					}
				}
				.padding()
				.navigationBarTitle(Text("Settings"), displayMode: .large)
				.navigationBarItems(
					trailing:
						Button(action: {
							presentationMode.wrappedValue.dismiss()
						}) {
							Image(systemName: "xmark")
						}
				)
			}
		}
    }
}

// MARK: - Preview

struct SettingsView_Previews: PreviewProvider {
    static var previews: some View {
        SettingsView()
    }
}
