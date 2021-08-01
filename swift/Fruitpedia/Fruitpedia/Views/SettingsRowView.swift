//
//  SettingsRowView.swift
//  Fruitpedia
//
//  Created by Dave Miller on 7/29/21.
//

import SwiftUI

struct SettingsRowView: View {
	
	// MARK: - Properties
	
	var name: String
	var content: String? = nil
	var linkLabel: String? = nil
	var linkDestination: String? = nil
	
	// MARK: - Body
	
    var body: some View {
		VStack {
			Divider().padding(.vertical, 4)
			HStack(alignment: .top, spacing: 10) {
				Text(name).foregroundColor(Color.gray)
				Spacer()
				if (content != nil) {
					Text(content!)
				} else if (linkLabel != nil && linkDestination != nil) {
					Link(linkLabel!, destination: URL(string: "\(linkDestination!)")!)
					Image(systemName: "arrow.up.right.square").foregroundColor(.pink)
				} else {
					EmptyView()
				}
			}
		}
    }
}

// MARK: - Preview

struct SettingsRowView_Previews: PreviewProvider {
    static var previews: some View {
		SettingsRowView(name: "Name")
			.previewLayout(.fixed(width: 375, height: 60))
			.padding()
    }
}
